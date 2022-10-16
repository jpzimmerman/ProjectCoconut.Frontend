function MenuItem(target: Function) {
    target.prototype.id = 'asdf';
    target.prototype.alias = 'oqpiweuropiwqer';
    target.prototype.cost = 5.50;
}


@MenuItem
class Pizza {
    id: string;
    alias: string;
    cost: number;

    constructor() {
        this.id = 'oiuoiuret',
        this.alias = 'm,nxcvkbhkjhkjhdsfg',
        this.cost = 14.99
    }
}

class Hamburger {
    id: string;

    constructor() {
        this.id = ''
    }
}

console.log(new Pizza().cost);