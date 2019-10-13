// 枚举(Enum)类型用于取值被限定在一定范围内的场景
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Tuh"] = 4] = "Tuh";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
// 枚举成员会被赋值从0开始递增的数字,同时也会对枚举值到枚举名进行反向映射
Days[0] === 'Sun';
Days['Sun'] === 0;
// 以上代码会被编译为:
// var Days;
// (function (Days) {
//     Days[Days["Sun"] = 0] = "Sun";
//     Days[Days["Mon"] = 1] = "Mon";
//     Days[Days["Tue"] = 2] = "Tue";
//     Days[Days["Wed"] = 3] = "Wed";
//     Days[Days["Tuh"] = 4] = "Tuh";
//     Days[Days["Fri"] = 5] = "Fri";
//     Days[Days["Sat"] = 6] = "Sat";
// })(Days || (Days = {}));
// 手动赋值
var Days1;
(function (Days1) {
    Days1[Days1["Sun"] = 3] = "Sun";
    Days1[Days1["Mon"] = 1] = "Mon";
    Days1[Days1["Tue"] = 2] = "Tue";
    Days1[Days1["Wed"] = 3] = "Wed";
    Days1[Days1["Tuh"] = 4] = "Tuh";
    Days1[Days1["Fri"] = 5] = "Fri";
    Days1[Days1["Sat"] = 6] = "Sat";
})(Days1 || (Days1 = {}));
;
// 未手动赋值的枚举项会接着上一个枚举项递增
Days['Wed'] === 3; //true
Days['Sum'] === 3; //true
Days[3] === 'Sum'; //false
Days[3] === 'Wed'; //true
// Ts不会报错,之后的会覆盖前面的
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 3] = "Sun";
    Days2[Days2["Mon"] = 1] = "Mon";
    Days2[Days2["Tue"] = "s"] = "Tue";
    Days2[Days2["Wed"] = 1.5] = "Wed";
    Days2[Days2["Tuh"] = 2.5] = "Tuh";
    Days2[Days2["Fri"] = 3.5] = "Fri";
    Days2[Days2["Sat"] = 4.5] = "Sat";
})(Days2 || (Days2 = {}));
;
// 枚举的两种类型:常数项和计算所得项
var Days3;
(function (Days3) {
    Days3[Days3["Sun"] = 3] = "Sun";
    Days3[Days3["Mon"] = 1] = "Mon";
    Days3[Days3["Tue"] = 2] = "Tue";
    Days3[Days3["Wed"] = 3] = "Wed";
    Days3[Days3["Tuh"] = 4] = "Tuh";
    Days3[Days3["Fri"] = 5] = "Fri";
    Days3[Days3["Sat"] = 'blue'.length] = "Sat";
})(Days3 || (Days3 = {}));
;
// 如果紧接在计算所得项后面的是未手动赋值的项,那么它就会因为无法获得初始值而报错
// 常数枚举
// const enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }
// // 常数枚举和普通枚举的区别是:它会在编译阶段被删除,并且不能包括计算成员
// console.log(
//   Directions['Up']
// )
