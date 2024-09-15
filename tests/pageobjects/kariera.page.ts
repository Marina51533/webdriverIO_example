import Page from "./page";

class KarieraPage extends Page{
  // define elements
  get searchInput() {
    return $('textarea[name="q"]');
  }

 async open() {
        await super.open('kariera')       //this will append `login` to the baseUrl to form complete URL
    }
}

export default new KarieraPage();
