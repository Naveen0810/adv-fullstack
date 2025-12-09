function outerFun() {
    let a = 10;
    return function () {
    console.log(a++);
  }
}
let result=outerFun()
result() //10
result() //11
result()//12
result()//13
result()//14
result()//15