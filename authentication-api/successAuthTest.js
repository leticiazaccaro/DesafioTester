const puppeteer = require('puppeteer');

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
  const page = await browser.newPage();
  //Colocar caminho da página index.html
  await page.goto('file:///C:/Users/letic/Desktop/Desafio%20R2T/index.html', {waitUntil: 'networkidle2'});

  await page.waitFor('input[id=email]');

  await page.$eval('input[id=email]', el => el.value = 'leticia@email.com');
  await page.$eval('input[id=password]', el => el.value = '12345678');

  await page.click('input[id="entrar"]');

  await delay(5000);

  await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

  //await browser.close();
})();