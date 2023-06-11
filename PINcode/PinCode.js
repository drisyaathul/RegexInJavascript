//UC1:

let pinCode = RegExp('^[0-9]{6}$');
let check1 = pinCode.test(400088);

if (check1) {
    console.log("PINCode is Valid");
} else {
    console.log("PINCode is Invalid");
}

//UC2:
let check2 = pinCode.test('A400088');

if (check2) {
    console.log("PINCode is Valid");
} else {
    console.log("PINCode is Invalid");
}

//UC3:
let check3 = pinCode.test('400088B');

if (check3) {
    console.log("PINCode is Valid");
} else {
    console.log("PINCode is Invalid");
}

//UC4:
let pinCodeIndia = RegExp('^[0-9]{3}\\s[0-9]{3}$');
let check4 = pinCodeIndia.test('400 088');

if (check4) {
    console.log("PINCode is Valid");
} else {
    console.log("PINCode is Invalid");
}

