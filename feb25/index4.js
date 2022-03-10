function Search(arr, x) {
    let l = 0, u = arr.length - 1;
    while (l <= u) {
        let mid = Math.floor(l + (u - l) / 2);
        if (arr[mid]==x) {
            return mid;
        }
        else if (arr[mid]>x) {
            u = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return l;
}
// function Insert(arr, index, e) {
//     arr.splice(index, 0, e);
//     console.log(arr);
// }
let s = [1, 3, 4, 6, 7];
console.log(Search(s, 2));
