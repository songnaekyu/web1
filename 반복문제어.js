//break
//반복문 수행 시 코드 블록을 탈출 할 때 사용되는 식별자
//다중 반복문일 경우 가장 안쪽의 반복문을 종료
//label을 통하여 다중 반복문을 한번에 종료 가능
// *label:반복문 앞에 콜론과 함께 쓰이는 식별자

//continue
//반복문 수행 시 코드 블록 실행을 해당 라인에서 중지하고
//블록코드를 종료 시킨 후 반복문 내 명시된 조건 판단


//break예제
// let text = "";

// for (let i = 0; i < 10; i++) {
//   if (i === 3) break;
//   text = text + i;
// }

// console.log(text)

// //continue
// text = "";

// for (let i = 0; i < 10; i++) {
//   if(i === 3) continue;
//   text = text + i;
// }

// console.log(text);




//label예제
//프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자
//break continue를 사용하는 반복문 안에서만 사용가능하며, break나 continue 지시자 위에 있어야함

for (let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i * j);
    break;
  }
}
// => 현업에서는 잘 사용 안한다.
end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i * j);
    break end;
  }
}
