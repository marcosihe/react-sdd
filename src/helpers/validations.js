const validateAreaCode = (number_1) => {
    if(number_1 > 0 && number_1 < 10000){
        return true;
    }else{
        return false;
    }
}
const validateBodyNumber = (number_2) => {
    if(number_2 > 999999 && number_2 <= 9999999){
        return true;
    }else{
        return false;
    }
}

const validateNames = (name, lastName) => {
    if(name.trim() !== '' && lastName.trim() !== ''){
        return true
    }else{
        return false;
    }
}

export {validateAreaCode, validateBodyNumber, validateNames}