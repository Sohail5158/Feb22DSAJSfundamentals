	function Missing(arr,l,u)
	{
		let mid = parseInt((l + u) / 2);
		if (l > u){
			return u + 1;
		}
		if (l != arr[l]){
			return l;
		}
		if (arr[mid] == mid){
			return Missing(arr,mid+1,u);
		}
		return Missing(arr,l,mid);
	}
	let s = [0, 1, 2,5];
	let n = s.length;
	console.log("smallest Missing element is " +Missing(s,0,n - 1));
