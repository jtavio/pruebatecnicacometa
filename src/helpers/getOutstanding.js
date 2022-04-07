

export const getOutstanding = (cuotos) => {
    return cuotos.filter(cuoto => cuoto.status === "OUTSTANDING");
}
