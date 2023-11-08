#!/usr/bin/env bash

ffmpeg -i BigBuckBunny.mp4 -s 160x90 -b:v 250k ./source/BigBuckBunny_160x90_250k.mp4
ffmpeg -i BigBuckBunny.mp4 -s 320x180 -b:v 500k ./source/BigBuckBunny_320x180_500k.mp4
ffmpeg -i BigBuckBunny.mp4 -s 640x360 -b:v 750k ./source/BigBuckBunny_640x360_750k.mp4
ffmpeg -i BigBuckBunny.mp4 -s 1280x720 -b:v 1500k ./source/BigBuckBunny_1280x720_1500k.mp4

packager in=./source/BigBuckBunny_160x90_250k.mp4,stream=video,init_segment='./segments/160x90_250k/BigBuckBunny_0.mp4',segment_template='./segments/160x90_250k/BigBuckBunny_$Number%01d$.mp4' \
    in=./source/BigBuckBunny_320x180_500k.mp4,stream=video,init_segment='./segments/320x180_500k/BigBuckBunny_0.mp4',segment_template='./segments/320x180_500k/BigBuckBunny_$Number%01d$.mp4' \
    in=./source/BigBuckBunny_640x360_750k.mp4,stream=video,init_segment='./segments/640x360_750k/BigBuckBunny_0.mp4',segment_template='./segments/640x360_750k/BigBuckBunny_$Number%01d$.mp4' \
    in=./source/BigBuckBunny_1280x720_1500k.mp4,stream=video,init_segment='./segments/1280x720_1500k/BigBuckBunny_0.mp4',segment_template='./segments/1280x720_1500k/BigBuckBunny_$Number%01d$.mp4' \
    --segment_duration 2 \
    --mpd_output ./segments/BigBuckBunny.mpd