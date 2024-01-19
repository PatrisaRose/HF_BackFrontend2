import { fejlec } from "../AdatLeiro.js";
import FejlecView from "./FejlecView.js";
import SorView from "./SorView.js";

export default class TablaView {
  #list = [];
  constructor(list, szuloELem) {
    this.#list = list;
    szuloELem.append(`<table class="table table-striped">
                                <thead></thead>
                                <tbody></tbody>
                            </table>`);
    this.tbodyElem = szuloELem.find("tbody");
    this.theadElem = szuloELem.find("thead")
    new FejlecView(fejlec, this.theadElem)
    
    this.sorMegjelenit();
  }

  sorMegjelenit() {
    // itt fogjuk példányoaítani a sort, annyiszor, ahány elem van
    this.#list.forEach((elem, index) => {
      new SorView(index, elem, this.tbodyElem);
    });
  }
}
