var aname = "정하늘";
var aaddr = "서울";
var frd = "ddong";
console.log("저는 " + aaddr + "에 살고있는 " + aname + "입니다.");
console.log("\uC800\uB294 ".concat(aaddr, "\uC5D0 \uC0B4\uACE0\uC788\uB294 ").concat(aname, "\uC785\uB2C8\uB2E4."));
console.log(frd);
console.log("\uC81C \uCE5C\uAD6C \uC774\uB984\uC740 ".concat(frd.toUpperCase(), "\uC785\uB2C8\uB2E4."));
var tel = "010-5772-7138";
console.log("\uC804\uD654\uBC88\uD638\uB294 ".concat(tel, "\uC785\uB2C8\uB2E4."));
console.log(tel.substring(0, 3));
console.log(tel.substring(9));
//바꾸기
console.log(tel.replace("57", "**"));
//Trim
var str3 = "                 똥 떵           ";
console.log(str3);
console.log(str3.trim());
