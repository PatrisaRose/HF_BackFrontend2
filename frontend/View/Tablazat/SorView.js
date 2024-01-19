import { AdatLeiro, fejlec } from "../AdatLeiro.js";
import NumberSorView from "./NumberSorView.js";
import TextSorView from "./TextSorView.js";
export default class SorView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.AdatLeiro = AdatLeiro;
    this.index = index;
    this.$inputElemObjektumokListaja = [];
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.id = this.#obj["felh_id"];
    this.htmlOsszerak();
    this.modositGomb = $("button.btn-primary:last");
    $("button.btn-danger:last").on("click", (event) => {
      this.#esemenyLetrehozo("sorTorles");
    });
    
    this.modositGomb.on("click", () => {
      // Pop-up ablak létrehozása <link>jQuery</link>-vel
      this.divOsszerak()
      this.inputOsszerak()
      this.inputokSzama = this.$inputElemObjektumokListaja.length;
      $(".modositUrlap").css("display", "block");    
      $(".modositGomb").on("click", (event) => {
        let validokSzama = 0;
      event.preventDefault();
      this.$inputElemObjektumokListaja.forEach(element => {
        if(element.getmValid()){ //NumberUrlapView getValid() metódusa
          validokSzama++
          console.log("Validszam:" + validokSzama)
          console.log("listaHossza:" + this.inputokSzama)
        }
      });
      if(validokSzama === this.inputokSzama){
        this.#esemenyLetrehozo("sorModositas");
        $(".modositUrlap").css("display", "none");
    }
       
      });
    });
  }

  divOsszerak(){
        let txt = "<div class = 'modositTartalom'>";
    txt += "<form>";

    txt += "</form>";
    txt += "</div>";
    $(".modositUrlap").html(txt); 
  }

  inputOsszerak() {
    for (const key in AdatLeiro) {
      if (key === "felh_id") {
        continue;
      }
      if (key === "szul_ev") {
        this.$inputElemObjektumokListaja.push(
        new NumberSorView($(".modositTartalom form"), this.AdatLeiro[key], key, this.#obj[key]));

      } else {
        this.$inputElemObjektumokListaja.push(
        new TextSorView($(".modositTartalom form"), this.AdatLeiro[key], key, this.#obj[key]));

      }
    }

    let txt2 = `<input type="button" class="btn btn-outline-success modositGomb" value="Módosít">`;
    $(".modositTartalom form").append(txt2)
  }

  htmlOsszerak() {
    let txt = "<tr>";

    for (const key in this.#obj) {
      txt += `<td>${this.#obj[key]}</td>`;
    }

    txt += `<td><button class='btn btn-danger'>Törlés</button></td>`;
    txt += `<td><button class='btn btn-primary'>Módosítás</button></td>`;

    txt += "</tr>";
    this.szuloElem.append(txt);
  }

  AdatLekeres() {
    let inputAdat = {};

    for (const key in AdatLeiro) {
      if (key === "created_at" || key === "updated_at" || key === "felh_id") {
        continue;
      } else {
        inputAdat[key] = $(`input#m${key}`).val();
      }
    }
    console.log(inputAdat);
    return inputAdat;
  }

  #esemenyLetrehozo(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, {
      detail: { adat: this.AdatLekeres(), id: this.id },
    });
    window.dispatchEvent(esemenyem);
  }
}
