// Mapped Types ---> check out the docs, this shit was fucking hard to know

type FlexibleDogInfo = {
    name: string,
} & Record<string, string | number>

// Same use-case
// type FlexibleDogInfo = {
//     name: string,
//     [key: string]: string | number,
// }

const dog2: FlexibleDogInfo = {
    name: "Buble",
    breed: "red",
    age: 8,
}

interface DogInfo {
    name: string;
    age: number;
}

type OptionFlags<Type> = {
    [Property in keyof Type]: null;
}

type DogOptions = OptionFlags<DogInfo>

type Listener<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (v: Type[Property]) => void
}

function listenToObl<T>(obj: T, listener: Listener<T>): void {
    throw "Implementing"
}

const dog: DogInfo = {
    name: 'bulbe',
    age: 22
}

type DogListener = Listener<DogInfo> // For testing purpose

listenToObl(dog, {
    onNameChange: (v) => {},
    onAgeChange: (v) => {},
})
