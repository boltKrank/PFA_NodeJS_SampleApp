const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.add_argument('headless')
    await driver.get('http://localhost');
    await driver.findElement(By.name('q'));.sendKeys('webdriver', Key.RETURN);
    await driver.getPageSource().contains("New Message!")
  } finally {
    await driver.quit();
  }
})();
