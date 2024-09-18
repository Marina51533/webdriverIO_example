import googleSearchPage from "../pageobjects/google-search.page";
import careerPage from "../pageobjects/career.page";
import { expect } from "chai";

describe("Performing operations on MoroSystems via Google", () => {
  before(async () => {
    await googleSearchPage.open();
    await googleSearchPage.clickAcceptCookiesBtn();
  });

  it("Should perform a search and validate results", async () => {
    // Validate Google Search Page
    expect(await browser.getTitle()).to.equal("Google");

    // Perform search and validate result
    await googleSearchPage.search("MoroSystems");
    await googleSearchPage.isSearched();
    const isTitleDisplayed = await googleSearchPage.morosystemsLink.isDisplayed()
    expect(isTitleDisplayed).to.be.true
  });

  it("Should redirect to Career/Kariera page", async () => {
    // Open Kariera Page and check for icon presence
    await careerPage.open();
    const isIconDisplayed = await careerPage.morosystemIcon.isDisplayed();
    expect(isIconDisplayed).to.be.true
  });
});

