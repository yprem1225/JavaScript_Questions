// function meth1(){
//     const pi=3.14;
//     console.log(pi);
//     pi=882;
//     console.log(pi);
// }

// function meth2(){
//     meth1()
// }

// function meth3(){
//     try{
//         meth1()
//     }catch(err){
//         console.log(err.name+" "+ err.message);
        
//     }
// }
// meth3()

function meth1(){
    const pi = 3.14
    console.log(pi);
    pi = 44
    console.log();
}

function meth2(){
    meth1()
}

function meth3(){
    try{
        meth2();
    }catch(err){
        console.log(err.name+" "+err.message);
    }
}

meth3( )