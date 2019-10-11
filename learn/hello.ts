let a: boolean = false
let b: Boolean = false
// 报错
let c: boolean = new Boolean(1)

let d: boolean = undefined

let e: number = Infinity

function add(): void {
  console.log('aaa')
}

// undefined和null是所有类型的子类型
let u:undefined = undefined
let q:void = u

// 变量在声明的时候，未指定其类型，它会被识别为任意类型(any)
let anything: any = 1;

// 类型推论
let aa: string = 'string'

let ab: string | number | boolean = 'a'
ab = 2

// 当TS不确定一个联合类型的变量到底是哪个变量的时候，只能访问此联合类型的所有类型里的公共属性和方法
function getLeng(something: string | number) {
  return something.length;
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型