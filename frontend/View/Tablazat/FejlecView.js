export default class FejlecView {
  #obj = {};
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.htmlOsszerak();
  }

  htmlOsszerak() {
    let cellaTartalom = "<tr>";

    for (const key in this.#obj) {
      cellaTartalom += `
              <th>${this.#obj[key]}</th>˙
              `;
    }

    cellaTartalom += "</tr>"

    this.szuloElem.append(cellaTartalom);
  }
}
