// 枚举(Enum)类型用于取值被限定在一定范围内的场景
enum Days {Sun, Mon, Tue, Wed, Tuh, Fri, Sat};
// 枚举成员会被赋值从0开始递增的数字,同时也会对枚举值到枚举名进行反向映射
Days[0] === 'Sun'
Days['Sun'] === 0
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
enum Days1 {Sun = 3, Mon = 1, Tue, Wed, Tuh, Fri, Sat};
// 未手动赋值的枚举项会接着上一个枚举项递增
Days['Wed'] === 3;  //true
Days['Sum'] === 3;  //true
Days[3] === 'Sum';  //false
Days[3] === 'Wed';  //true
// Ts不会报错,之后的会覆盖前面的

enum Days2 {Sun = 3, Mon = 1, Tue = <any>"s", Wed = 1.5, Tuh, Fri, Sat};


// 枚举的两种类型:常数项和计算所得项
enum Days3 {Sun = 3, Mon = 1, Tue, Wed, Tuh, Fri, Sat = 'blue'.length};
// 如果紧接在计算所得项后面的是未手动赋值的项,那么它就会因为无法获得初始值而报错


// 常数枚举
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
// 常数枚举和普通枚举的区别是:它会在编译阶段被删除,并且不能包括计算成员
console.log(
  Directions['Up']
)