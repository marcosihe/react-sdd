const getAreaCode = (number) => {
    return (number.toString()).slice(0, -7);
}

const getBodyNumber = (number) => {
    return (number.toString()).slice(-7);
}

export { getAreaCode, getBodyNumber };