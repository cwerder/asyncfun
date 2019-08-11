var f = async function() {
	promise = new Promise((res, rej) => {
		setTimeout(() => res(3), 2000)
	}).then(k => {console.log(k); console.log(promise); return k+2;});
	console.log(promise);
	//var a = await promise;
	//console.log(a);
}

var promise;
f();
console.log('everything is awesome')