import { AdatLeiro, fejlec } from "../AdatLeiro.js";
import NumberUrlapView from "./NumberUrlapView.js";
import TextUrlapView from "./TextUrlapView.js";

export default class UrlapView {
  constructor(szuloElem) {
    this.AdatLeiro = AdatLeiro;
    this.szuloElem = szuloElem;
    this.$inputElemObjektumokListaja = [];
    this.htmlOsszerak();
    this.inputokSzama = this.$inputElemObjektumokListaja.length;
    
    $("form").submit((event) => {
      event.preventDefault();
      let validokSzama = 0;
      this.$inputElemObjektumokListaja.forEach(element => {
        if(element.getValid()){ //NumberUrlapView getValid() metódusa
          validokSzama++
        }
      });
      if(validokSzama === this.inputokSzama){
      //this.#esemenyLetrehozo("sorFelvitel");
    }
    });
  }
  htmlOsszerak() {
    let txt = "<form>";
    for (const key in AdatLeiro) {
      if (key === "felh_id") {
        continue;
      }
      if (key === "szul_ev") {
        this.$inputElemObjektumokListaja.push(
          new NumberUrlapView(this.szuloElem, this.AdatLeiro[key], key)
        );
      } else {
        this.$inputElemObjektumokListaja.push(
          new TextUrlapView(this.szuloElem, this.AdatLeiro[key], key)
        );
      }
    }

    txt += `<button id="submit" class="btn btn-outline-success">Submit</button>`;
    txt += "</form>";
    
    this.szuloElem.append(txt);
    this.AdatLekeres();
  }

  AdatLekeres() {
    let inputAdat = {};

    for (const key in AdatLeiro) {
      if (key === "created_at" || key === "updated_at" || key === "felh_id") {
        continue;
      } else {
        inputAdat[key] = $(`input#${key}`).val();
      }
    }

    return inputAdat;
  }

  #esemenyLetrehozo(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, {
      detail: this.AdatLekeres(),
    });
    window.dispatchEvent(esemenyem);
  }
}
