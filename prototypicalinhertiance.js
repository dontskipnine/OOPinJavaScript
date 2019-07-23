// HTMLElement && HTMLSelectElement

function HTMLElementOwn() {
    this.click = function() { console.log('click!'); }
}

HTMLElementOwn.prototype.focus = function() { console.log('Focused'); }

function HTMLSelectElementOwn(items = []) {
    this.items = [];
    this.addItem = function (item){ this.items.push(item); };
    this.removeItem = function (item){ this.items.splice(this.items.indexOf(item), 1); };
}

HTMLSelectElementOwn.prototype = new HTMLElementOwn();
HTMLSelectElementOwn.prototype.constructor = HTMLSelectElementOwn;