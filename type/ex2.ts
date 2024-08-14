const aname : string = "정하늘";
const aaddr: string = "서울";
const frd : string = "ddong";

console.log("저는 " + aaddr +"에 살고있는 " + aname + "입니다." );
console.log(`저는 ${aaddr}에 살고있는 ${aname}입니다.`);

console.log(frd);
console.log(`제 친구 이름은 ${frd.toUpperCase()}입니다.`)

const tel = "010-5772-7138"
console.log(`전화번호는 ${tel}입니다.`)
console.log(tel.substring(0, 3));
console.log(tel.substring(9))

//바꾸기
console.log(tel.replace("57", "**"))

//Trim
const str3 : string = "                 똥 떵           "
console.log(str3)
console.log(str3.trim());