class GooglePage {
  // define elements
  get searchInput() {
    return $('textarea[name="q"]');
  }
  get acceptCoockiesBtn() {
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
    this.searchInput.click();
    this.searchInput.setValue(query);
    await browser.pause(3000);
    browser.keys("Enter"); // Simulate hitting the 'Enter' key
  }

  async isSearched() {
    await this.resultsList.waitForExist({ timeout: 4000 });
    return this.resultsList.isDisplayed();
  }

  async clickFirstResult() {
    this.morosystemsLink.click();
    await browser.pause(2000);
  }

  async clickAcceptCoockiesBtn() {
    if (await this.acceptCoockiesBtn.isExisting()) {
      await this.acceptCoockiesBtn.click();
    }
  }
}

export default new GooglePage();
