var config = require('./config.json')
var ProfileURL = config.url
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const URL = ProfileURL
    console.log("May take a moment... grabbing following list.")
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://soundcloud.com/' + URL + '/following');
    await page.setViewport({
        width: 1200,
        height: 1000
    });

    await autoScroll(page);

    var following = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('a[class="userBadgeListItem__heading sc-type-small sc-text-h4 sc-link-dark sc-link-primary sc-truncate"]'),
          a => a.getAttribute('href')
        )
      );

    following = following.map(i => 'https://soundcloud.com' + i + '/tracks');

    var a = JSON.stringify(following).replace(/[\[\]'"]/g,'');
    b = a.replace(/,/g, "\n")

    fs.writeFile('following.txt', b, (err) => {
        if (err) {
            throw err;
        }
    console.log("Following list written to following.txt!");
    });

    await browser.close();
})();

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 1000;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 2500);
        });
    });
}