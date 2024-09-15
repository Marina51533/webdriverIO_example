import googleSearchPage from "../pageobjects/google-search.page";
import karieraPage from "../pageobjects/kariera.page";
import { expect } from "chai";

describe("Performing a search operation on Google Page", () => {
  it("Performing a search operation", async () => {
    await googleSearchPage.open();
    expect(await browser.getTitle()).to.equal("Google");
    await googleSearchPage.search("MoroSystems");
    await googleSearchPage.isSearched();
    await googleSearchPage.clickFirstResult();
    await browser.pause(3000);
    const morosystemUrl = await browser.getUrl();
    console.log(morosystemUrl);
    expect(morosystemUrl).to.include("www.morosystems.");
  });

  it("Perfoming redirection to Kariera page", async () => {
    await karieraPage.open();
    const otevrenePoziceText = $('//*[text()="Otevřené pozice"]');
    expect(otevrenePoziceText).to.exist;
  });
});
