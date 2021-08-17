const date = new Date();
const day = ('0' + date.getDate()).slice(-2);
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const year = date.getFullYear();
const hour = ('0' + date.getHours()).slice(-2);
const minute = ('0' + date.getMinutes()).slice(-2);
const seconds = ('0' + date.getSeconds()).slice(-2);
const miliseconds = date.getMilliseconds();

const idGenerator = (code) => {
    return `${code}${day}${month}${year}${hour}${minute}${seconds}${miliseconds}`
}

export { idGenerator }