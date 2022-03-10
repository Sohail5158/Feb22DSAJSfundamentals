function swap(arr,xp, yp)
{
	let temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

function selectionSort(arr, n)
{
	let i, j, min_idx;
	for (i = 0; i < n-1; i++)
	{
		min_idx = i;
		for (j = i + 1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;
		swap(arr,min_idx, i);
	}
}

function Array( arr,length)
{
	let i;
	for (i = 0; i <length; i++){
		console.log(arr[i] + " ");
    }
}

let arr = [64, 25, 12, 22, 11];
	let n = 5;
	selectionSort(arr, n);
	console.log("Sorted array:");
	Array(arr, n);