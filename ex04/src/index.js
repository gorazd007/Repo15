const milili = [10, 25, 4];

function myArr(mili) {
    'use strict';
    milili.unshift(milili.pop());

    return mili;
}
console.log(myArr(milili));

module.exports = myArr;