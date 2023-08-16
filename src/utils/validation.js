
const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


export function isUserEmailValid(email) {
    return regex.test(email);
}

export function ValidateFirstName(firstName) {
    return true;
}

export function ValidateLastName(lastName) {
    return true;
}

export function ValidatePassword(password) {
    return true;
}