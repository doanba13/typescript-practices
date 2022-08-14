// Reduce prototype:
//      First arg: a callback with first arg is the previous value and the second arg is the current value
//      Second arg: initial previous value (if not provide initial value, the first value was the previous value)

function myForeach<T>(items: T[], myForeachFn: (v: T) => void): void {
    items.reduce((p, c) => {
        myForeachFn(c);
        return undefined
    }, undefined)
}

myForeach(['a', 'b', 'c'], (a) => console.log(a))

function myFiler<T>(items: T[], myFilterFn: (v: T) => boolean): T[]{
    return items.reduce((a, v) => (myFilterFn(v) ? [...a, v] : a), [] as T[]);
}

console.log(myFiler([1,2,3,4,5,6,7,8,9,10], (v) => v % 2 !== 0))


function myMap<T, K>(items: T[], myMapFn: (v: T) => K): K[]{
    return items.reduce((a, v) => [...a, myMapFn(v)], [] as K[])
}

console.log(myMap([1,2,3,4,5,6,7,8,9,10], (v) => (v * 2).toString()))

