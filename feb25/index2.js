function binarySearch(arr, x) {
    let l = 0, u = arr.length - 1;
    while (l <= u) {
        let mid = l + Math.floor((u - l) / 2);
        let a = x.localeCompare(arr[mid]);
         if (a == 0) {
            return mid;
        }
        if (a > 0) {
            l = mid + 1;
        }
        else
            u = mid - 1;
    }
    return false;
}
let s = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'x', 'z'];
let result = binarySearch(s, 'e');
if (result == false)
    console.log("Element not present");
else
    console.log("Element found at index " + result + "");
