// const primer = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 1; i <= primer.length; i++) {
//     primer[i] = String(primer[i] * primer[i])
// }

// console.log(primer)

const zadatak = [12,32,32,321,213,3213,1313131,313131]
let noviArr = zadatak.map((el,i,arr) => {
    if(i === 0){
        return el;
    }
    else{
        if(el % 2 == 0){
            return el-arr[i-1]
        }
        else{
            return el
        }
    }
});

console.log(noviArr)