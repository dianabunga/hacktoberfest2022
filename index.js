const pptr = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
pptr.use(StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
pptr.use(AdblockerPlugin({blockTrackers: true}));
const delay = require('delay');
const chromePaths = require('chrome-paths');
const fetch = require('node-fetch');
const { faker } = require('@faker-js/faker/locale/id_ID');

const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--ignore-certifcate-errors',
    '--ignore-certifcate-errors-spki-list',
    '--disable-accelerated-2d-canvas',
    '--no-zygote',
    '--no-first-run',
    '--disable-dev-shm-usage'
];

const agus = async (fullName, phone) => {
    const browser = await pptr.launch({
        headless: false,
        ignoreHTTPSErrors: true,
        executablePath: chromePaths.chrome,
        defaultViewport: {
            width: 375,
            height: 667,
            isMobile: false,
        },
        slowMo: 0,
        devtools: false,
        args
    });
    const context = browser.defaultBrowserContext();
    context.overridePermissions("https://statistikdev.jakarta.go.id/index.php/892231", ["clipboard-read"]);
    const [page] = await browser.pages();
    await page.goto('https://statistikdev.jakarta.go.id/index.php/892231', {
        waitUntil: 'domcontentloaded', 
        timeout: 0
    });

    await page.waitForSelector('#ls-button-submit');
    await page.evaluate(() => document.querySelector('#ls-button-submit').click());
    
    await page.waitForSelector('#answer892231X794X18134');
    await page.select('#answer892231X794X18134', 'X');
    await delay(2000);
    await page.select('#select18135', 'X7');
    await delay(2000);
    await page.select('#select18136', 'X74');
    await delay(2000);
    await page.click('#javatbd892231X794X182791 > label');
    await delay(2000);
    await page.click('#javatbd892231X794X182792 > label');
    await delay(2000);
    await page.click('#javatbd892231X794X182794 > label');
    await delay(2000);
    await page.click('#javatbd892231X794X182795 > label');
    await delay(2000);
    await page.click('#javatbd892231X794X182796 > label');
    await page.click('#answer892231X794X18152');
    await page.keyboard.type(fullName, {delay: 100});
    await delay(2000);
    await page.click('#answer892231X794X18153');
    await page.keyboard.type(phone, {delay: 100});
    await delay(2000);
    await page.click('#javatbd892231X794X18154M > label');
    await delay(2000);
    await page.click('#answer892231X794X181553');
    await delay(2000);
    await page.click('#javatbd892231X794X181565 > label');
    await delay(2000);
    await page.click('#javatbd892231X794X181579 > label');
    await delay(2000);
    await page.click('#ls-button-submit');
    await delay(5000);

    await page.click('#javatbd892231X795X181594 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181604 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181614 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181624 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181634 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181644 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181654 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181664 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181674 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181681 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181682 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181683 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181684 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181685 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181686 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181687 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181688 > label')
    await delay(2000);
    await page.click('#javatbd892231X795X181689 > label')
    await delay(2000);
    await page.click('#ls-button-submit')
    await delay(5000);

    await page.click('#javatbd892231X796X181804 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181814 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181824 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181834 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181844 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181854 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181864 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181874 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181884 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181891 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181892 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181893 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181894 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181895 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181896 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181897 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181898 > label')
    await delay(2000);
    await page.click('#javatbd892231X796X181899 > label')
    await delay(2000);
    await page.click('#ls-button-submit')
    await delay(5000);

    await page.click('#javatbd892231X798X182204 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182214 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182224 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182234 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182244 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182254 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182264 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182274 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182284 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182291 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182292 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182293 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182294 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182295 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182296 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182297 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182298 > label')
    await delay(2000);
    await page.click('#javatbd892231X798X182299 > label')
    await delay(2000);
    await page.click('#ls-button-submit')
    await delay(5000);

    await page.click('#javatbd892231X799X182404 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182414 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182424 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182434 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182444 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182454 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182464 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182474 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182484 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182491 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182492 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182493 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182494 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182495 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182496 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182497 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182498 > label')
    await delay(2000);
    await page.click('#javatbd892231X799X182499 > label')
    await delay(2000);
    await page.click('#ls-button-submit')
    await delay(5000);

    await page.click('#javatbd892231X800X182604 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182614 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182624 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182634 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182644 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182654 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182664 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182674 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182684 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182691 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182692 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182693 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182694 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182695 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182696 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182697 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182698 > label')
    await delay(2000);
    await page.click('#javatbd892231X800X182699 > label')
    await delay(2000);
    await page.click('#ls-button-submit')
    await delay(5000);

    await browser.close();
}

(async () => {
    for(let i = 0; i < 10; i++) {
        const randomName = faker.name.fullName();
        const firstName = randomName.split(' ')[0];
        const lastName = randomName.split(' ')[1];
        const fullName = `${firstName} ${lastName}`;
        const randomPhone = Math.floor(Math.random() * 90000000) + 10000000;
        const phone = `0812${randomPhone.toString()}`;
        await agus(fullName, phone);
        console.log(`${i + 1}. Done ${fullName} ${phone}`);
    }
})();