function Intersection(arr1, arr2){
	let i = 0, j = 0;
	while (i < arr1.length && j < arr2.length)
	{
		if (arr1[i] < arr2[j])
			i++;
		else if (arr2[j] < arr1[i])
			j++;
		else
		{
			console.log(arr2[j++]);
			i++;
		}
	}
}

let arr1 = [ 1, 2, 4, 5, 6,8,8 ];
let arr2 = [ 2, 3, 5, 7,8 ];
Intersection(arr1, arr2)
