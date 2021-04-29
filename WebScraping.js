const { createSecureContext } = require('node:tls');
const puppeteer = require('puppeteer')
async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);

scrapeProduct(https://www.askbankifsccode.com/YES-BANK)
const [e1] awit page.$x('/html/body/div[1]/div[1]/div[1]/form/div/select'); 
const txt = await el.getProperty('textContent');
const state = awit txt.jsonvalue();

const [e12] awit page.$x('/html/body/div[1]/div[1]/div[1]/div[2]/select'); 
const txt1 = await e12.getProperty('textContent');
const district = awit txt1.jsonvalue();

const [e13] awit page.$x('/html/body/div[1]/div[1]/div[1]/div[3]/select'); 
const txt2 = await e13.getProperty('textContent');
const branch = awit txt2.jsonvalue();

console.log({state,district,branch});
browser.close();
}