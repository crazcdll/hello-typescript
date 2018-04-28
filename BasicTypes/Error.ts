// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

console.log(fail())

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): 1 {
  while (true) {
    return error("Something failed");
  }
}