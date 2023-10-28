const randomize = require('randomatic');
var random = require('random-name')
const readline = require('readline-sync')
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const moment = require('moment');
var crypto = require("crypto");
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const randomUseragent = require('random-useragent');

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
const randstr = length =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });

const getToken = (deviceId) => new Promise((resolve, reject) => {
    fetch(`https://user-go.lit.it/auth/guest`, {
            method: 'POST',
            headers: {
                "No-Authorization": true,
                "User-Agent": randomUseragent.getRandom(),
                "Content-Type": "application/json; charset=utf-8",
                "Content-Length": 38,
                "Host": "user-go.lit.it",
                "Connection": "Keep-Alive",
                "Accept-Encoding": "gzip",


            },
            body: JSON.stringify({
                "device_id": `${deviceId}_IDKc_cAin`
            })
        })
        .then(res => res.json())
        .then(res => {
            resolve(res)
        })
        .catch(err => reject(err))
});
const functionRegist = (email, bearer, namaawal, namaakhir, username, deviceId) => new Promise((resolve, reject) => {
    fetch(`https://auth-go.lit.it/register/email`, {
            method: "POST",
            headers: {
                "User-Agent": randomUseragent.getRandom(),
                "Authorization": `Bearer ${bearer}`,
                "device-id": `${deviceId}_IDKc_cAin`,
                "Content-Type": "application/json;charset=utf-8",
                "Content-Length": 188,
                "Host": "auth-go.lit.it",
                "Connection": "Keep-Alive",
                "Accept-Encoding": "gzip",
            },
            body: JSON.stringify({
                "email": email,
                "password": "Joni123#",
                "firstname": namaawal,
                "lastname": namaakhir,
                "birthdate": "1995-04-06",
                "country_code": "ID",
                "username": username,
                "gender": "male",
                "language": "en"
            })
        })
        .then(res => res.json())
        .then(res => {
            resolve(res)
        })
        .catch(err => reject(err))
});
const functionReff = (reff, deviceId, bearer) => new Promise((resolve, reject) => {
    fetch(`https://user-go.lit.it/mobile/v1/user/acceptReferralCode`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${bearer}`,
                "User-Agent": randomUseragent.getRandom(),
                "Content-Type": "application/json; charset=utf-8",
                "Content-Length": 38,
                "Host": "user-go.lit.it",
                "Connection": "Keep-Alive",
                "device-id": `${deviceId}_IDKc_cAin`,
                "Accept-Encoding": "gzip",
            },
            body: JSON.stringify({
                "invite_code": reff
            })
        })
        .then(res => res.json())
        .then(res => {
            resolve(res)
        })
        .catch(err => reject(err));
});

const functionVerifemail = (email, domain) => new Promise((resolve, reject) => {
    fetch(`https://generator.email/${domain}/${email}`, {
            method: "get",
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
                "accept-encoding": "gzip, deflate, br",
                "cookie": `_ga=GA1.2.659238676.1567004853; _gid=GA1.2.273162863.1569757277; embx=%5B%22${email}%40${domain}%22%2C%22hcycl%40nongzaa.tk%22%5D; _gat=1; io=io=tIcarRGNgwqgtn40O${randstr(3)}; surl=${domain}%2F${email}`,
                "upgrade-insecure-requests": 1,
                "user-agent": randomUseragent.getRandom()
            }
        })
        .then(res => res.text())
        .then(text => {
            let $ = cheerio.load(text);
            let src = $('a.verify-link');
            let srcc = src.attr('href')
            resolve(srcc);
        })
        .catch(err => reject(err));
});


(async() => {
    console.log(`[ ${moment().format("HH:mm:ss")} ] ` + "===Ngebot lititit by ariqsp===")
    await sleep(5000);
    var tanyareff = readline.question(`[ ${moment().format("HH:mm:ss")} ] ` + 'Kode reff : ');
    var jumlah = readline.question(`[ ${moment().format("HH:mm:ss")} ] ` + 'Jumlah reff : ')
    for (var i = 0; i < jumlah; i++) {

        try {
            const deviceId = crypto.randomBytes(6).toString("hex");
            const list = ['jagomail.com', 'disipulo.com', 'densahar.store', 'playfuny.com', 'dmxs8.com', 'udaanexpress.tech', 'xvector.org', 'otpku.com', 'ianz.pro', 'yuinhami.com', 'emvil.com', 'kenvanharen.com', 'gmailpro.gq', 'o0i.es', 'alvinneo.com', 'nakiuha.com', 'kongshuon.com', 'saxophonexltd.com', 'hallo.singles', 'roadbike.ga']
            const list1 = list[Math.floor(Math.random() * list.length)];
            var namaawal = random.first()
            var namaakhir = random.last()
            var uname = `${namaawal}${randomize('0', 3)}`
            var email = uname + `@` + list1;
            var username = `${uname}`
            var reff = tanyareff
            var gas = await getToken(deviceId)
            if (gas.success == true) {
                console.log(`[ ${moment().format("HH:mm:ss")} ] ` + "Sukses mendapatkan Token")
                await sleep(1000);
                var bearer = gas.data.access_token
                var regist = await functionRegist(email, bearer, namaawal, namaakhir, username, deviceId)
                if (regist.success == true) {
                    console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Sukses Regist pake email ${email}`)
                    await sleep(1000);
                    var ngereff = await functionReff(reff, deviceId, bearer)
                    if (ngereff.success == true) {
                        console.log(`[ ${moment().format("HH:mm:ss")} ] ` + "Sukses ngeref")
                        await sleep(100);
                        do {
                            linkConfirm = await functionVerifemail(uname, email.split('@')[1]);
                            console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Wait for veriff link..`)
                        } while (!linkConfirm);
                        console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `code is ${linkConfirm}..`)
                        await sleep(100);
                        var browser = await puppeteer.launch({
                            headless: true,
                            ignoreHTTPSErrors: true,
                            slowMo: 0,
                            args: [
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-infobars',
                                '--ignore-certifcate-errors',
                                '--ignore-certifcate-errors-spki-list',
                                '--disable-accelerated-2d-canvas',
                                '--no-zygote',
                                '--no-first-run',
                                '--disable-dev-shm-usage'
                            ]
                        });

                        const context = await browser.createIncognitoBrowserContext();
                        const page = await context.newPage();
                        await page.goto(`${linkConfirm}`, { waitUntil: 'networkidle2', timeout: 0 });
                        await page.waitForSelector('#success-verify-modal > .hystmodal__wrap > .hystmodal__window > .modal > .modal__inner > .info-modal__btn')
                        await page.click('#success-verify-modal > .hystmodal__wrap > .hystmodal__window > .modal > .modal__inner > .info-modal__btn')
                        await browser.close();
                        await sleep(3000)
                        console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Sukses reff ke ${i}\n`)
                    } else {
                        console.log(ngereff)
                    }
                } else {
                    console.log(regist)
                }
            } else {
                console.log(gas)
            }

        } catch (e) {
            console.log(e)
            i--
        }

    }


})();
