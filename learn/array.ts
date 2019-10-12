let ba: number[] = [1,2,3,4,5]
// 报错,不允许出现其它类型
ba.push('8')

// 也可以用数组的泛型来定义
let bb: Array<number> = [1,2,3,4,5]
// 报错,不允许出现其它类型
bb.push('b')

// 用接口表示数组
interface NumberArray {
  [index: number]: number
}
let bc: NumberArray = [1,2,3,4,5]

// 类数组
function sum() {
  let args: number[] = arguments
}
// arguments是一个类数组,不能用普通的数组的方式来描述,而应该使用接口
function sum2() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}
// 常用的类数组都有自己的接口定义
function sum3() {
  let args: IArguments = arguments;
}


// any在数组中的使用
let list: any[] = [1,2,3,'aaa']