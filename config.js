var	query = require('cli-interact').question
const fs = require('fs')
const config = new Object();
var path = "config.json"

if (fs.existsSync(path)) {
    console.log('Config file already exists. If you would like to change the config, delete config.json.')
} else {
    console.log('Config file does not exist.')
    config.url = query('What is your Profile URL? ex. dltzk in https://soundcloud.com/dltzk. The script will grab all songs from artists that this profile follows.\n');
    console.log('Profile URL: ' + config.url)
    config.output = query('What folder would you like to output to? ex. E:\\soundcloud-backup\n')
    console.log('Output: ' + config.output)
    var betterPath = config.output.replace("\\", "/")
    console.log(betterPath)
    config.format = betterPath + '/%(uploader)s/%(title)s.%(ext)s'

    const data = JSON.stringify(config, null, 4);

    fs.writeFile('config.json', data, (err) => {
        if (err) {
            throw err;
        }
    console.log("Config saved.");
});
}

