

export function isEmailPassValidation(email) {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(email);
}

export function isFirstNamePassValidation(firstName) {
    const regex = new RegExp('^[a-zA-Z]{2,}$');
    return regex.test(firstName);
}

export function isLastNamePassValidation(lastName) {
    const regex = new RegExp('^[a-zA-Z]{2,}$');
    return regex.test(lastName);
}

export function isPasswordPassValidation(password) {
    const regex = new RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,10}$');
    return regex.test(password);
}