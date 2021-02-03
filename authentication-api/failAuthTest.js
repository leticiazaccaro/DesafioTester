const puppeteer = require('puppeteer');

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
  }

(async () => {
  browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
  page = await browser.newPage();
  //Colocar caminho da página index.html
  await page.goto('file:///C:/Users/letic/Desktop/Desafio%20R2T/index.html', {waitUntil: 'networkidle2'});

  await page.waitFor('input[id=email]');

  //Teste com email não cadastrado
  await page.$eval('input[id=email]', el => el.value = 'teste@email.com');
  await page.$eval('input[id=password]', el => el.value = '12345678');

  await page.click('input[id="entrar"]');

  await delay(5000);
  await browser.close();

  //Teste com email vazio
  browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
  page = await browser.newPage();
  //Colocar caminho da página index.html
  await page.goto('file:///C:/Users/letic/Desktop/Desafio%20R2T/index.html', {waitUntil: 'networkidle2'});
  await page.waitFor('input[id=email]');

  await page.$eval('input[id=email]', el => el.value = '');
  await page.$eval('input[id=password]', el => el.value = '12345678');

  await page.click('input[id="entrar"]');

  await delay(5000);
  await browser.close();

  //Teste com senha vazio
  browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
  page = await browser.newPage();
  //Colocar caminho da página index.html
  await page.goto('file:///C:/Users/letic/Desktop/Desafio%20R2T/index.html', {waitUntil: 'networkidle2'});
  await page.waitFor('input[id=email]');

  await page.$eval('input[id=email]', el => el.value = 'leticia@email.com');
  await page.$eval('input[id=password]', el => el.value = '');

  await page.click('input[id="entrar"]');

  await delay(5000);
  await browser.close();
})();