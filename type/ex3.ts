//조건문
let nScore : number = 49;


if(nScore >= 30){
    console.log("good");
}else if(nScore >= 60){
    console.log("notbad");
}else if(nScore >= 80){
    console.log("bad");
}else{
    console.log("uuuuuuuu");
}

let isPass : boolean = false;

let nSc = (isPass) ? 10 : 5;
console.log(nSc);


//Swithch
let mname : string = "최하늘";
let code : number = 0;

switch(mname){
    case " 김하늘":
        code = 90
        break;
    case "최하늘":
        code = 80
        break;
    case "강하늘":
        code = 70
        break;
        default:
            code = 10;
}
console.log(code);
console.log("---------------")

//반복문
for(let i=0; i < 3; i++) {
    console.log(`반복함 ${i}`);
}

console.log("---------------")


//구구단
let nDan: number = 9;
console.log(`구구단 ${nDan}단을 출력합니다.`);
for(let i = 1; i < 10 ; i++){
    if (i % 2 == 0)
    console.log(`9 X ${i} = ${nDan * i}`);
}

//369

for (let i = 1; i < 30; i++) {
    let str: string = "";
    if (i % 3 == 0) {
      str = "짝";
    } else {
      str = i.toString();
    }
    console.log(`게임 : ${str}`);
  }
    