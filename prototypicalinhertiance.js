// Base Element
function HTMLElementOwn() {
    this.click = function() { console.log('click!'); }
}

HTMLElementOwn.prototype.focus = function() { console.log('Focused'); }
HTMLElementOwn.prototype.render = function() { return 'render'; }

// First child element.
function HTMLSelectElementOwn(items = []) {
    this.items = [];
    this.addItem = function (item){ this.items.push(item); };
    this.removeItem = function (item){ this.items.splice(this.items.indexOf(item), 1); };
}

HTMLSelectElementOwn.prototype = new HTMLElementOwn();
HTMLSelectElementOwn.prototype.constructor = HTMLSelectElementOwn;

HTMLSelectElementOwn.prototype.render = function() {
    return '<select>\n';
    // + for (item in this.items) {
    //     <option>
    // }
    // + '';
}

function HTMLImg(address = 'https://www.duckduckgo.com') {
    this.address = address;
}

HTMLImg.prototype = new HTMLElementOwn();
HTMLImg.prototype.constructor = HTMLImg;

HTMLImg.prototype.render = function() {
    return 'src=\"' + this.address + '\"';
}

const s = new HTMLImg();

const elements = [
    new HTMLSelectElementOwn([1, 2, 3]),
    new HTMLImg('http://')
];

for (let element of elements)
    console.log(element.render());