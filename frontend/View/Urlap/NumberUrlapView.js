export default class NumberUrlapView {
    #value;
    constructor(szuloElem, obj, key) {
      this.szuloElem = szuloElem;
      this.obj = obj;
      this.key = key;
      this.valid = true;
      this.numberUrlapElem();
      this.inputElem = this.szuloElem.find("#" + this.key);
      this.inputElem.on("change", (event) => {
        console.log(this.inputElem.val());
        //Itt fogunk validálni
        this.#value = this.inputElem.val();
        if (this.#value >= this.obj.min && this.#value <= this.obj.max ) {
            this.valid = true;
        }else{
            this.valid = false;
        }
        this.validEFormazas();
        console.log(this.valid);
      });
    }
  
    getValue() {
      return this.#value;
    }

    getValid(){
        return this.valid
    }

    validEFormazas(){
        if(this.valid == true){
            this.inputElem.css('border-color', 'green');
        }else{
            this.inputElem.css('border-color', 'red');
        }
    }
  
    numberUrlapElem() {
        let txt = `<div class="mb-3 mt-3">
            <label for="${this.key}" class="form-label">${this.obj.megjelenes}:</label>
            <input type ="${this.obj.tipus}" 
            class="form-control" id="${this.key}" 
             min="${this.obj.min}"
             max="${this.obj.max}"
             value="${this.obj.value}" name="${this.key}">
            </div>`;
    
            this.szuloElem.append(txt);
      }
  }