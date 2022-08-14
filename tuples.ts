// Tuples is an array type, each element in array can be different type ;)
// Here was an implement of tuples with a simple string get/set state (similar to React useState)

type ThreeCoordirnate = [x: number, y: number, z: number];

function addThreeCordirnate(a: ThreeCoordirnate, b: ThreeCoordirnate) : ThreeCoordirnate {
    return [
        a[0] + b[0],
        a[1] + b[1],
        a[2] + b[2],
    ]
}

console.log(addThreeCordirnate([1,2,3], [1,2,3]));

function simpleStringState(intial: string): [() => string, (s: string) => void] {
    let str = intial;

    return [
        () => str,
        (s) => str = s,
    ]
}

const [strGetter, strSetter] = simpleStringState("Hello World!");

console.log(strGetter());
strSetter("Goodbye World!");
console.log(strGetter());
