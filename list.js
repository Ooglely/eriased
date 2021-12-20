var exec = require('child_process').exec;
var config = require('./config.json')
const Output = config.output + "\\list.txt"
console.log('Printing a list of all songs from artists that you follow to list.txt. May take a while.')

exec('del list.txt')
exec('del ' + Output)
exec('".\\yt-dl\\youtube-dl.exe" --flat-playlist -e --batch-file="following.txt" >> list.txt')
console.log('Printing to list.txt.')
exec('".\\yt-dl\\youtube-dl.exe" --flat-playlist -e --batch-file="following.txt" >> ' + Output)
console.log('Printing to ' + Output + '.')