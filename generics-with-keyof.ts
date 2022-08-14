function plunk<DataType, DataKey extends keyof DataType>(items: DataType[], key: DataKey): DataType[DataKey][]{
    return items.map((items) => items[key])
}

interface Dog {
    name: string;
    age: number;
}

const dogs: Dog[] = [
    {
        name: 'duy',
        age: 22
    },
    {
        name: 'cuong',
        age: 23
    }
]

console.log(plunk(dogs, "name"));
console.log(plunk(dogs, "age"));

interface BaseEvent {
    name: string,
    date: number
}

interface EventMap {
    addToCart: BaseEvent & {quantity: number; price: number; productId: number;};
    checkOut: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
    console.log([name, data])
}

sendEvent("addToCart", {name: 'fooz', date: 2022, price: 100, productId: 23, quantity: 10});
sendEvent("checkOut", {name: 'foo2', date: 2021})
