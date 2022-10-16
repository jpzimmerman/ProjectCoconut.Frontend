"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
function addShipping(price, shipping) {
    console.log(price + shipping);
    return price + shipping;
}
var queueTmp = {
    queueId: 'asdf'
};
console.log(addShipping(10, 25));
console.log(variables_1.myname);
console.log(queueTmp.queueId);
