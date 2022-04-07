

export const getPaid = (cuotos) => {
    return cuotos.filter(cuoto => cuoto.status === "PAID");
}