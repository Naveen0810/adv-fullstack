function outerFun1(){
    let a=10;
    let b=10;
    function innerFun1(){
        function innerFun2(){
            console.log(a);
            console.log(b);
        }
        innerFun2()
    }
    innerFun1()
}
outerFun1()