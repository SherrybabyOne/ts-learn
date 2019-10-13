// 范型(generics)是指在定义函数、接口或类的时候,
// 不预先指定具体的类型,而在使用的时候再指定类型的一种特性。

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for(let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result
}

console.log(
  createArray<string>(3, 'x')
)
// 用<T>用来代指任意输入的类型

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
console.log(
  swap([1, 'a'])
)

// 范型约束
interface Lengthwise {
  length: number
}
function logoggo<T extends Lengthwise>(arg: T): number {
  return arg.length
}
console.log(
  logoggo([1,2,3])
)

// 范型类
class GenericNumber<T> {
  z: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.z = 1;
myGenericNumber.add = function(x, y) { return x + y }