function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n('aihaoaihao');
    }
}
console.log(getName('aihao'), getName(function (n) { return n; }));
var a = 'aihao';
// 报错
// const b: StringTypes = 'aa'
// 数组合并了相同类型的对象，而元祖合并了不同类型的对象
var tom = ['Tom', 25];
console.log(tom[0].slice(1), tom[1].toFixed(2));
