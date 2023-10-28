const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
pptr.use(AdblockerPlugin({blockTrackers: true}));
const fetch = require('node-fetch');
