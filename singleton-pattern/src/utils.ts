const idMap = new WeakMap();
let nextId = 0;

export function getObjectId(obj: object) {
    if (!idMap.has(obj)) {
        idMap.set(obj, nextId++);
    }

    return idMap.get(obj);
}
