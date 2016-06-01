# Segment Pixelator

Pixel tracking server that will parse any arbitrary analytics data that is encoded to base64 string, and send it to segment.io.

### Usage

`SEGMENT_KEY=your_write_key npm start`

### Environment Variables

* `SEGMENT_KEY` Your segment write key. *Required*.
* `SEGMENT_MAX_MESSAGES` Maximum number of segment messages that will be stored locally before being sent to Segment.
* `SEGMENT_MAX_WAIT` How long the segment messages will be stored locally before being forced to sent to Segment.
