function sum(x, y) {
    return x + y;
}
// 在TS中,=>用来表示函数的定义,左边是输入类型,需要用括号括起来,右边是输出类型
var sum1 = function (x, y) {
    return x + y;
};
// 用?表示可选参数
function sum3(x, y, z) {
    if (z)
        return x + y + z;
    else
        return x + y;
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split(' ').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(123), reverse('123'));
function getLength(something) {
    if (something) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
console.log(getLength(123), getLength('1234'));
