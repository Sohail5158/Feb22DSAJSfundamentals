let s=[2,3,7,11,15];
function sum(arr,x){
    let newArr=[],i,j;
    for( i=0;i<arr.length;i++){
        for( j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==x){
                console.log(i,j)
            }
        }
    }
}
console.log(sum(s,18));