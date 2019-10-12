function sum(x: number, y: number): number {
  return x + y
}
// 在TS中,=>用来表示函数的定义,左边是输入类型,需要用括号括起来,右边是输出类型
let sum1: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y
}

// 用?表示可选参数
function sum3(x: number, y: number, z?:number): number {
  if (z) return x + y + z
  else return x + y
}


// 函数的重载:
// 重复定义多次函数,前几次是函数定义,最后一次是函数实现
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if(typeof x === 'number') {
    return Number(x.toString().split(' ').reverse().join(''));
  }else if(typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

console.log(
  reverse(123),
  reverse('123')
)


function getLength(something: string | number): number {
  if ((<string>something).length) {
      return (<string>something).length;
  } else {
      return something.toString().length;
  }
}

console.log(
  getLength(123),
  getLength('1234')
)