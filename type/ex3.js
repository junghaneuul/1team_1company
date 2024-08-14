//조건문
var nScore = 49;
if (nScore >= 30) {
    console.log("good");
}
else if (nScore >= 60) {
    console.log("notbad");
}
else if (nScore >= 80) {
    console.log("bad");
}
else {
    console.log("uuuuuuuu");
}
var isPass = false;
var nSc = (isPass) ? 10 : 5;
console.log(nSc);
//Swithch
var mname = "최하늘";
var code = 0;
switch (mname) {
    case " 김하늘":
        code = 90;
        break;
    case "최하늘":
        code = 80;
        break;
    case "강하늘":
        code = 70;
        break;
    default:
        code = 10;
}
console.log(code);
console.log("---------------");
//반복문
for (var i = 0; i < 3; i++) {
    console.log("\uBC18\uBCF5\uD568 ".concat(i));
}
console.log("---------------");
//구구단
var nDan = 9;
console.log("\uAD6C\uAD6C\uB2E8 ".concat(nDan, "\uB2E8\uC744 \uCD9C\uB825\uD569\uB2C8\uB2E4."));
for (var i = 1; i < 10; i++) {
    if (i % 2 == 0)
        console.log("9 X ".concat(i, " = ").concat(nDan * i));
}
//369
for (var i = 1; i < 30; i++) {
    var str = "";
    if (i % 3 == 0) {
        str = "짝";
    }
    else {
        str = i.toString();
    }
    console.log("\uAC8C\uC784 : ".concat(str));
}
