// // 类(class): 定义了一件事情的抽象特点,包含它的属性和方法
// // 对象(Object): 类的实例,通过new生成
// // 面向对象(OPP)的三大特征: 封装、继承、多态
// // 存取器(getter & setter): 用以改变属性的读取和赋值行为
// // 修饰器: 用于限定成员或类型的性质
// // 抽象类: 供其它类继承的基类,抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
// // 接口: 不同类之间公共的属性和方法,可以抽象成一个接口。一个类只能继承自另一个类,但可以实现多个接口

// // 使用static修饰符修饰的方法成为静态方法,它们不需要实例化，只能用过类来调用
// class Animal2 {
//   static isAnimal(a) {
//     return a instanceof Animal2
//   }
// }
// let a2 = new Animal2()
// // a2.isAnimal()
// Animal2.isAnimal(a2)

// // 实例属性
// class Anilam3 {
//   name = 'jack'
// }
// let a3 = new Anilam3()
// console.log(a3.name)

// // 静态属性
// class Animal4 {
//   static num = 1
// }
// console.log(Animal4.num)


// // TypeScript有三种修饰符(Access Modifiers): public private protected
// class Animal1 {
//   private name;
//   public constructor(name) {
//     this.name = name;
//   }
// }

// let a1 = new Animal1('Jack')
// console.log(a1.name,'111')
// // 需要注意的是:TS编译之后的代码，并没有限制private属性的外部的访问权限
// // 以上被编译之后的代码:
// var Animal = (function() {
//   function Animal(name) {
//     this.name = name;
//   }
//   return Animal;
// }());
// var a = new Animal('Jack')
// console.log(a.name,'222')

// // 当构造函数被修饰为private时,该类不允许被继承或实例化
// // 当构造函数被修饰为protected时，该类只允许被继承

// // readonly只读关键字,只允许出现在属性声明或索引签名中。
// class Animal5 {
//   readonly name;
//   public constructor(name) {
//     this.name = name
//   }
// }
// let a5 = new Animal5('Jack')
// console.log(a5.name)
// // a5.name = 'Tom'



// // 抽象类
// // abstract用于定义抽象类和其中的抽象方法

// // 抽象不允许被实例化,抽象类中的抽象方法必须被子类实现
// class Animal6 {
//   constructor(name) {
//     this.name = name
//   }
// }


abstract class Animal7 {
  public name;
  constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}
class Cat extends Animal7 {
  public sayHi() {
    console.log(`aaaa ${this.name}`)
  }
}
let cat = new Cat('Tom')



// 类的类型:
class Person {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  sayHi(): string {
    return `${this.name}正在向你招手`
  }
}
let aihao = new Person('AiHao')
console.log(aihao.sayHi())