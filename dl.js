var config = require('./config.json')
var exec = require('child_process').exec;
var dl = exec('.\\yt-dl\\youtube-dl.exe --newline -i -o "' + config.format + '" -x --audio-format mp3 --audio-quality 0 --ignore-config --hls-prefer-native --embed-thumbnail --add-metadata --batch-file="following.txt"');

dl.stdout.on('data', function(data) {
    console.log(data); 
});