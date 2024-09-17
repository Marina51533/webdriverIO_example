import Page from "./page";

class KarieraPage extends Page{
  // define elements

  get morosustemIcon(){
    return $('img[alt="MOROSYSTEMS"]')
  }

 async open() {
        await super.open('kariera')       //this will append `kariera` to the baseUrl to form complete URL
    }
}

export default new KarieraPage();
