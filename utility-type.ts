interface Info {
    name: string;
    id: number;
    phone?: string;
}

type InfoOverride = Partial<Info>;

const merge =  (info: Info, override: InfoOverride) : Info => ({
    ...info,
    ...override,
})

console.log(merge({name: 'ba', id: 2, phone: '01234556'}, {phone: '123456789'}))

type RequiredInfo = Required<Info>;
type NameAndIdInfo = Pick<Info, "name" | "id">
type InfoWithOutId = Omit<Info, 'id'>

const mapById = (items: Info[]): Record<Info['id'], InfoWithOutId> => items.reduce((a, v) => {
    const {id, ...rest} = v;
    return {
        ...a,
        [id]: rest,
    }
}, {} as Record<Info['id'], InfoWithOutId>);

console.log(mapById([
    {
        name: "ba",
        id: 2,
        phone: "12345"
    },
    {
        name: "bao",
        id: 3,
        phone: "09876543"
    }
]))
