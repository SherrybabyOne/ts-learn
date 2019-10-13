// 类型别名
type Name = string;
type NameResolver = (n: string) => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  }else {
    return n('aihaoaihao');
  }
}
console.log(
  getName('aihao'),
  getName((n) => n)
)


// 字符串字面量类型
type StringTypes = 'aihao' | 'wyy' | 'hhh';
const a: StringTypes = 'aihao'
// 报错
// const b: StringTypes = 'aa'