//UC1:

let pinCode = RegExp('^[0-9]{6}$');
let check = pinCode.test(400088);

if (check) {
    console.log("PINCode is Valid");
} else {
    console.log("PINCode is Invalid");
}
