class GooglePage {
  // define elements
  get searchInput() {
    return $('textarea[name="q"]');
  }
  get acceptCookiesBtn() {
    return $('//button//div[contains(text(), "Přijmout vše")]');
  }

  get resultsList() {
    return $(`#res`);
  }

  get morosystemsLink() {
    return $("h3");
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
   try {
     if (await this.acceptCookiesBtn.isExisting()) {
       await this.acceptCookiesBtn.waitForClickable({ timeout: 5000 });
       await this.acceptCookiesBtn.click();
     }
   } catch (error) {
     console.error("Failed to click 'Accept Cookies' button", error);
   }
  }
}

export default new GooglePage();
