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


