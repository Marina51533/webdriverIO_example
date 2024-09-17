class GooglePage {
  // define elements
  get searchInput() {
    return $('textarea[name="q"]');
  }
  get acceptCookiesBtn() {
    return $('//button//div[contains(text(), "Přijmout vše")]');
  }

  get acceptCookiesBtnEng() {
    return $('//button//div[contains(text(), "Accept all")]');
  }

  get resultsList() {
    return $(`#res`);
  }

  get morosystemsLink() {
    return $("a*=MoroSystems");
  }

  // methods
  async open() {
    await browser.url("https://www.google.com");
  }

  // Method to perform search
  async search(query: string) {
    await this.searchInput.setValue(query);
    await browser.pause(3000);
    browser.keys("Enter"); // Simulate hitting the 'Enter' key
  }

  async isSearched() {
    await this.resultsList.waitForExist({ timeout: 4000 });
    return this.resultsList.isDisplayed();
  }
  // method to display results
  async clickFirstResult() {
    await this.morosystemsLink.waitForClickable({ timeout: 5000 });
    await this.morosystemsLink.click();
  }

  async clickAcceptCookiesBtn() {
    if (await this.acceptCookiesBtn.isExisting()) {
      await this.acceptCookiesBtn.waitForClickable({ timeout: 5000 });
      await this.acceptCookiesBtn.click();
    } else if (await this.acceptCookiesBtnEng.isExisting()) {
      await this.acceptCookiesBtnEng.waitForClickable({ timeout: 5000 });
      await this.acceptCookiesBtnEng.click();
    } else {
      console.log("No Accept Cookies button found.");
    }
  }
}

export default new GooglePage();
