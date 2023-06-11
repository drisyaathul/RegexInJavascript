//UC1:
let email = RegExp('^[a][b][c].[a-z]{1,}[@][b][r][i][d][g][e][l][a][b][z].[c][o].[a-z]{2}$');
let check1 = email.test("abc.xyz@bridgelabz.co.in");

if (check1) {
    console.log("Email is Valid");
} else {
    console.log("Email is Invalid");
}