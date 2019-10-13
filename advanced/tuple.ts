// 数组合并了相同类型的对象，而元祖合并了不同类型的对象
let tom: [string, number] = ['Tom', 25]
console.log(
  tom[0].slice(1),
  tom[1].toFixed(2)
)