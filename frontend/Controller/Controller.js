import DataService from "../Modell/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";

export default class Controller {
  constructor() {
    this.dataService = new DataService();

    this.dataService.getData(
      "felhasznaloks",
      this.megjelenit /*<--callback függvény*/
    );
    $(window).on("sorFelvitel", (event) => {
      console.log(event.detail);
      this.dataService.postData("felhasznaloks", event.detail);
    });

    $(window).on("sorTorles", (event) => {
        console.log(event.detail);
        this.dataService.deleteData("felhasznaloks", event.detail.id);
      });

      $(window).on("sorModositas", (event) => {
        console.log(event.detail);
        this.dataService.putData("felhasznaloks", event.detail.id, event.detail.adat);
      });
    new UrlapView($(".urlap"));
  }

  megjelenit(lista) {
    //console.log(lista);
    //Példányosítjuk a view-t Táblázatot
    new TablaView(lista, $(".adatok"));
  }
}
