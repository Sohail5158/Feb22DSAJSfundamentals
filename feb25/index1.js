function binarysearch(arr,x){
    var l=0;u=arr.length;
    while(l<=u){
        mid=l+Math.floor((u-l)/2);
        if(mid==x){
            return arr.indexOf(mid);
        }   
        else if(mid>x){
            u=mid-1;
        }
        else{
            l=mid+1
        }
    }
    return -1;
}
function occurence(arr,x){
    var c=binarysearch(arr,x);
    if(c==-1)
    return 0;
    var left=c-1;
    var right=c+1;
    var count=1;
    while(arr[left]==x){
        count++,left--;
    } 
    while(arr[right]==x){
        count++,right++;
    }
    return count;
}    
var s=[1,2,2,2,3,4,4,5,5,8,9,9,9];
console.log(occurence(s,9));
