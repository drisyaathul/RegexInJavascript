//UC1:To begin with lets validate the mandatory part and start with abc

let email = RegExp('^[a][b][c].[a-z]{1,}[@][b][r][i][d][g][e][l][a][b][z].[c][o].[a-z]{2}$');
let check1 = email.test("abc.xyz@bridgelabz.co.in");

if (check1) {
    console.log("Email is Valid");
} else {
    console.log("Email is Invalid");
}

//UC2:Ensure @ and validate the mandatory 2nd part i.e. bridgelabz

let check2 = email.test("abc.xyz@bridgelabz.co.in");

if (check2) {
    console.log("Email is Valid");
} else {
    console.log("Email is Invalid");
}

//UC3:Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co

let check3 = email.test("abc.xyz@bridgelabz.co.in");

if (check3) {
    console.log("Email is Valid");
} else {
    console.log("Email is Invalid");
}

//UC4: Lets handle optional part i.e. xyz

let check4 = email.test("abc.xyz@bridgelabz.co.in");

if (check4) {
    console.log("Email is Valid");
} else {
    console.log("Email is Invalid");
}