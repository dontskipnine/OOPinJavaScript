// Base Element
function HTMLElementOwn() {
    this.click = function() { console.log('click!'); }
}

HTMLElementOwn.prototype.focus = function() { console.log('Focused'); }
HTMLElementOwn.prototype.render = function() { return 'render'; }

// First child element.
function HTMLSelectElementOwn(items = []) {
    this.items = items;

    this.addItem = function (item){ this.items.push(item); };
    this.removeItem = function (item){ this.items.splice(this.items.indexOf(item), 1); };

    this.render = function() {
        return `<select>${this.items.map(item => `<option>${item}</option>`).join('')}</select>`;
    }
}

HTMLSelectElementOwn.prototype = new HTMLElementOwn();
HTMLSelectElementOwn.prototype.constructor = HTMLSelectElementOwn;

function HTMLImg(address) {
    this.address = address;

    this.render = function() {
        return `<img src="${this.address}" />`;
    }
}

HTMLImg.prototype = new HTMLElementOwn();
HTMLImg.prototype.constructor = HTMLImg;

const s = new HTMLImg();

const elements = [
    new HTMLSelectElementOwn([1, 2, 3]),
    new HTMLImg('http://')
];

for (let element of elements)
    console.log(element.render());