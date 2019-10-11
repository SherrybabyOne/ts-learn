interface Person {
  name: string,
  age: number
}

let tom: Person = {
  name: 'Tom',
  age: 12
}
let xiaohong: Person = {
  name: 'xiaohong'
}

// 赋值的时候，变量的形状必须和接口的形状保持一致
interface Person2 {
  name: string,
  age?: number
}

let xiaoming: Person2  = {
  name: 'xiaoming'
}

// 使用[propName: string]: string定义任意属性
// attention: 一旦定义了任意属性，那么确定属性和可选属性的类型必须是它的类型的子集
interface Person3 {
  name: string,
  age: number,
  [propName: string]: any
}
let xiaocong: Person3 = {
  name: 'xiaocong',
  age: 18,
  school: 'gaozhong'
}

// 使用readonly定义只读属性
// 第一次给对象赋值的时候需要赋值给只读属性，之后不能更改
interface Person4 {
  name: string,
  school: string
}
let aihao: Person4 = {
  name: 'aihao'
}