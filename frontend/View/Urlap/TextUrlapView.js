export default class TextUrlapView {
  #value = "";
  #valid = false;
  constructor(szuloElem, obj, key) {
    this.szuloElem = szuloElem;
    this.obj = obj;
    this.key = key;
    this.textUrlapElem();
    this.inputElem = this.szuloElem.find("#" + this.key);
    this.inputElem.on("keyup", (event) => {
      console.log(this.inputElem.val());
      //Itt fogunk validálni
      this.#value = this.inputElem.val();
      let patternString = this.obj.pattern;
      let pattern = new RegExp(patternString);
      if (pattern.test(this.#value)) {
        this.#valid = true;
      } else {
        this.#valid = false;
      }
      console.log(this.#valid);
      this.validEFormazas();
    });
  }

  getValue() {
    return this.inputElem.val();
  }
  getValid() {
    return this.#valid;
  }
validEFormazas(){
    if(this.#valid == true){
        this.inputElem.css('border-color', 'green');
    }else{
        this.inputElem.css('border-color', 'red');
    }
}

  textUrlapElem() {
    let txt = `<div class="mb-3 mt-3">
                <label for="${this.key}" class="form-label">${this.obj.megjelenes}:</label>
                <input type ="${this.obj.tipus}" 
                class="form-control" id="${this.key}" 
                placeholder="${this.obj.placeholder}"
                 pattern="${this.obj.pattern}"
                 value="${this.obj.value}" name="${this.key}">
                </div>`;

    this.szuloElem.append(txt);
  }
}
