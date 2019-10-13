// 接口(interface)可以用于对对象的形状(Shape)进行描述
// 接口的另一个用途: 对类的一部分行为进行抽象

// 把不同类的公共特性提取成接口,用implements关键字来实现
interface Alarm {
  alert()
}
class Door {

}
class Security extends Door implements Alarm{
  alert() {
    console.log(`SecurityDoor Alert`)
  }
}
class Car extends Door implements Alarm {
  alert() {
    console.log(`Car Alarm`)
  }
}


// 接口继承接口:
interface Alarm1 {
  alert()
}
interface LightAlarm extends Alarm1 {
  ligthOn();
  lightOff();
}

