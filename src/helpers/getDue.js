
export const getDue = (cuotos) => {
    return cuotos.filter(cuoto => cuoto.status === "DUE");
}