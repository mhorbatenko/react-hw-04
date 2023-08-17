
const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');



const ValidationSchema = {
    firstName: {
        regexp: '[a-zA-Z]{2,}'
    }
}

export function isEmailPassValidation(email) {
    return regex.test(email);
}

export function isFirstNamePassValidation(firstName) {
    const regex = new RegExp('[a-zA-Z]{2,}');
    return regex.test(firstName);
}

export function isLastNamePassValidation(lastName) {
    const regex = new RegExp('[a-zA-Z]{2,}');
    return regex.test(lastName);
}

export function isPasswordPassValidation(password) {
    return true;
}