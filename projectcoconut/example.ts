import { myname } from "./variables";
import { Queue } from "./generics";

function addShipping(price: number, shipping: number) : number {
    console.log(price + shipping);
    return price + shipping;
}

var queueTmp: Queue = {
    queueId: 'asdf'
};

console.log(addShipping(10, 25));
console.log(myname);
console.log(queueTmp.queueId)