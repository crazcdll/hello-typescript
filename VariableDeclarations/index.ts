let o = {
  a: "foo",
  b: 12,
  c: "bar"
}
// let {a: aa, b: bb, c: cc} = o
let {a: aa, b: bb, c: cc}:{a: string, b: number, c: string} = o
// ({ a, b } = { a: "baz", b: 101 })
// {a, b}: { a: string, b: number } = o

// let { a: newName1, b: newName2 } = o;

// console.log(newName1)
// console.log(newName2)

console.log(aa)
console.log(bb)
console.log(cc)


function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject
  return {a, b}
}

console.log(keepWholeObject({a: "a", b: null}))