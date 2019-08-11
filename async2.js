const rxjs = require('rxjs');
const { take, map } = require('rxjs/operators');

//callback hell
(function () {
	setTimeout(
		() => { 
			console.log(1);
			setTimeout(function () {
				console.log(2);
					setTimeout(() => {
						console.log(3)
					}, 1000) 
			}, 1000)
		}
		, 1000)
})();

//promises
promise = new Promise((res, rej) => {
	setTimeout(() => {
		console.log(1);
		res(1);
	}, 1000)
}).then(result => {
	var p = new Promise((res, rej) => {
		setTimeout(() => {
			console.log(++result);
			res(result);
		}, 1000)
	});
	return p;
}).then(result => {
	var p = new Promise((res, rej) => {
		setTimeout(() => {
			console.log(++result);
			res(result);
			console.log(p);
			console.log(promise);
		}, 1000)
	});
	return p;
});

setTimeout(() => {
	console.log(promise)
}, 5000);


//async await
(async function () {
	n1 = await new Promise((res, rej) => {
		setTimeout(() => {
			res(1);
		}, 1000)
	});
	console.log(n1);
	n2 = await new Promise((res, rej) => {
		setTimeout(() => {
			res(2)
		}, 1000)
	});
	console.log(n2);
	n3 = await new Promise((res, rej) => {
		setTimeout(() => {
			res(3)
		}, 1000)
	});
	console.log(n3);
})();

//via observables
//rxjs.of(1,2,3).pipe(delay(1000)).subscribe(r => console.log(r));
const seconds = rxjs.interval(1000);
const takeThreeNumbers = seconds.pipe(take(3), map(x => x+1))
takeThreeNumbers.subscribe(r => console.log(r));