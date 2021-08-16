const getAreaCode = (number) => {
    return parseInt((number.toString()).slice(0, -7));
}

const getBodyNumber = (number) => {
    return parseInt((number.toString()).slice(-7));
}

export { getAreaCode, getBodyNumber };