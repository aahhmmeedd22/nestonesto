const arr = [1, 2, 3, 4, 5, 6];

// zbir=arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]
// console.log(zbir)

let res = 0;
let counter = arr.length - 1;

while(counter >= 0){
        if( arr[counter] % 2 == 0 ){
                // console.log(arr[counter])
                res = res + arr[counter]
                // counter--;
        }
        counter--;
}

console.log(res)