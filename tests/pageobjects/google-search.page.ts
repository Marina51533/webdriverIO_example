class GooglePage {
  // define elements
  get searchInput() {
    return $('textarea[name="q"]');
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
    await this.resultsList.waitForExist({ timeout: 1000 });
    return this.resultsList.isDisplayed();
  }

  async clickFirstResult() {
    this.morosystemsLink.click();
  }
}

export default new GooglePage();