const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res=[],subarr=[],trackSum=0;
	for(int i=0;i<arr.length;i++){
		if(arr[i]+trackSum<=n){
			subarr.push(arr[i]);
			trackSum+=arr[i];
		}else{
			res.push(subarr);
			subarr=[ arr[i] ];
			trackSum=arr[i];
		}
	}
	res.push(subarr);
	return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
