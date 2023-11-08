import { Variant, Variants, getParsedManifest } from "./src/mpd-parser";

const startPlayback = async () => {
  const video: HTMLVideoElement = document.createElement("video");
  video.style.width = "640px";
  video.setAttribute("controls", "");
  document.getElementsByTagName("body")[0].appendChild(video);

  const { variants, bandwidths } = await getParsedManifest(
    "./segments/BigBuckBunny.mpd"
  );

  let selectedVariant = variants[bandwidths[0]];
  const initializationSegment = selectedVariant.segments[0];
  const codecs = selectedVariant.codecs;
  let segments = selectedVariant.segments;

  const mp4InitializationUri = initializationSegment;
  const mimeCodec = `video/mp4; codecs="${codecs}"`;

  if (!MediaSource.isTypeSupported(mimeCodec)) {
    console.error("Unsupported media format");
    return;
  }

  const mediaSource: MediaSource = new MediaSource(); // mediaSource.readyState === 'closed'
  const url = window.URL.createObjectURL(mediaSource);
  video.src = url;

  async function getMp4Data(mp4Uri: string): Promise<ArrayBuffer> {
    const mp4Response: Response = await fetch(mp4Uri);
    return mp4Response.arrayBuffer();
  }

  /* Both are adjustable parameters which may vary based on the stream or application
   We will use value of 3 and 2 just for the sake of demonstration */
  let reservoir = 3;
  let cushion = 2;

  function utilityBasedSelection(bufferLevel: number, bandwidths: number[]) {
    let highestUtility = -Infinity;
    let quality = 0;
    // Utility-based quality selection
    for (let i = 0; i < bandwidths.length; i++) {
      // Calculate utility for each variant
      let utility =
        (bandwidths[i] - bandwidths[0]) / bandwidths[0] +
        (bufferLevel - reservoir) / cushion;
      if (utility > highestUtility) {
        highestUtility = utility;
        quality = i;
      }
    }
    return quality;
  }

  function selectBOLAvariant(bufferLevel: number, variants: Variants) {
    let quality: number = 0;

    if (bufferLevel < reservoir) {
      quality = 0; // Lowest quality
    } else if (bufferLevel > reservoir + cushion) {
      quality = bandwidths.length - 1; // Highest quality
    } else {
      quality = utilityBasedSelection(bufferLevel, bandwidths);
    }

    return variants[bandwidths[quality]];
  }

  function calculateBufferInfo(buffered: TimeRanges) {
    const ret = [];
    for (let i = 0; i < buffered.length; i++) {
      ret.push({ start: buffered.start(i), end: buffered.end(i) });
    }
    return ret;
  }

  function calculateBufferLevel(buffered: TimeRanges) {
    const bufferInfo = calculateBufferInfo(buffered);
    const currentTime = video.currentTime;

    if (!bufferInfo.length) {
      return 0;
    }

    let bufferLevel = 0;
    const { end, start } = bufferInfo[bufferInfo.length - 1];
    if (currentTime < end && currentTime >= start) {
      bufferLevel = end - currentTime;
    }

    return bufferLevel;
  }

  function checkBufferAndSelectVariant(buffered: TimeRanges) {
    // Calculate the current buffer size
    const bufferLevel = calculateBufferLevel(buffered);
    // Select the optimal variant based on BOLA
    let optimalVariant = selectBOLAvariant(bufferLevel, variants);

    return optimalVariant;
  }

  async function switchVariant(
    newVariant: Variant,
    sourceBuffer: SourceBuffer
  ) {
    selectedVariant = newVariant;
    const initSegment = newVariant.segments[0];

    if (!sourceBuffer.updating) {
      const firstSegment = await getMp4Data(initSegment); // First segment is here
      sourceBuffer.appendBuffer(firstSegment);
    }
  }

  async function getSegments(sourceBuffer: SourceBuffer) {
    const optimalVariant = checkBufferAndSelectVariant(sourceBuffer.buffered);

    if (i !== 0 && optimalVariant.segments[0] !== selectedVariant.segments[0]) {
      await switchVariant(optimalVariant, sourceBuffer);
    }

    return optimalVariant.segments;
  }
  let i = 0;

  async function onSourceOpen() {
    URL.revokeObjectURL(video.src); // Revoke Object URL for garbage collection
    const sourceBuffer: SourceBuffer = mediaSource.addSourceBuffer(mimeCodec);

    sourceBuffer.addEventListener("updateend", async function () {
      if (!sourceBuffer.updating && i !== segments.length) {
        segments = await getSegments(sourceBuffer);
      }

      if (!sourceBuffer.updating && i !== segments.length) {
        const nextSegmentUri = segments[i];
        const nextSegment = await getMp4Data(nextSegmentUri); // Next segments
        sourceBuffer.appendBuffer(nextSegment);
        i++;
      }
      if (
        mediaSource.readyState === "open" &&
        !sourceBuffer.updating &&
        i === segments.length
      ) {
        mediaSource.endOfStream();
      }
    });

    const firstSegment = await getMp4Data(mp4InitializationUri); // First segment is here
    sourceBuffer.appendBuffer(firstSegment);
  }

  mediaSource.addEventListener("sourceopen", onSourceOpen.bind(mediaSource));
};

startPlayback();
