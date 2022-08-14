function simpleState<T>(intial: T): [() => T, (v: T) => void] {
    let value = intial;

    return [
        () => value,
        (v) => value = v,
    ]
}

const [getter, setter] = simpleState(20)

console.log(getter());
setter(40);
console.log(getter())

const [getter2, setter2] = simpleState<number | null>(null)

console.log(getter2());
setter2(40);
console.log(getter2())

interface Ranks<T> {
    item: T,
    rank: number,
}


function ranker<T>(items: T[], rank: (item: T) => number): T[] {
     const ranks: Ranks<T>[] = items.map((item) => ({
         item,
         rank: rank(item),
     }));

     ranks.sort((a, b) => a.rank - b.rank)
    return ranks.map((rank) => rank.item)
}

interface Pokemon {
    name: string,
    hp: number
}

const pokemon: Pokemon[] = [
    {
        name: 'bulbasaurs',
        hp: 10,
    },
    {
        name: 'megasaurs',
        hp: 8,
    },
    {
        name: 'pikachu',
        hp: 100,
    },
]

const rankedPokemon = ranker(pokemon, ({hp}) => hp);
console.log(rankedPokemon)

