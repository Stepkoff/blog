export type Mods = Record<string, boolean | string | undefined>

export const cn = (
    cls: string,
    mods:Mods = {},
    additional: Array<string | undefined> = [],
):string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ');