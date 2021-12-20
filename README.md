# eriased
 
A script to easily archive whole Soundcloud pages.
Currently takes a Soundcloud users following list and downloads all songs from those users using [youtube-dl](https://github.com/ytdl-org/youtube-dl), without using the closed Soundcloud API.
The cover art, artist name and track name are all added to each song's metadata.

To run the script, install the node dependencies, then run run.bat.
First time run will set up a config for later use. If you need to change it for any reason, delete config.json.

## Timings

Takes about 6-8 hours to download an archive of ~600 users, with 20,000 songs in total.
Currently the script doesn't skip songs that is already downloaded in order to prevent losing songs that have files replaced, however an option may come in the future in order to shorten times.
