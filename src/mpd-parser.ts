import { parse } from "mpd-parser";

type Segment = {
  uri: string;
  map: {
    uri: string;
  };
};

type Playlist = {
  attributes: {
    BANDWIDTH: number;
    CODECS: string;
  };
  segments: Array<Segment>;
};

export type Variant = {
  codecs: string;
  segments: Array<string>;
};

export type Variants = { [key: string]: Variant };

export const getParsedManifest = async (manifestUri: string) => {
  const manifestResponse = await fetch(manifestUri);
  const manifest = await manifestResponse.text();

  const parsedManifest = parse(manifest);

  const bandwidths: Array<number> = [];
  const variants: Variants = parsedManifest.playlists.reduce(
    (accumulator: Array<Variant>, playlist: Playlist) => {
      const bandwidth = playlist.attributes.BANDWIDTH;
      bandwidths.push(bandwidth);
      const initializationSegment = `./segments/${playlist.segments[0].map.uri}`;
      const segments = playlist.segments.map(
        (segment: any) => `./segments/${segment.uri}`
      );

      return {
        ...accumulator,
        [bandwidth]: {
          codecs: playlist.attributes.CODECS,
          segments: [initializationSegment, ...segments],
        },
      };
    },
    {}
  );

  return { variants, bandwidths };
};
