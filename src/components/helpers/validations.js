const validateNumber_1 = (number_1) => {
    if(number_1 > 0 && number_1 < 10000){
        return true;
    }else{
        return false;
    }
}
const validateNumber_2 = (number_2) => {
    if(number_2 > 999999 && number_2 <= 9999999){
        return true;
    }else{
        return false;
    }
}

const validateNames = (name, lastName, phoneNumber) => {
    if(name.trim() !== '' && lastName.trim() !== ''){
        return true
    }else{
        return false;
    }
}

export {validateNumber_1, validateNumber_2, validateNames}