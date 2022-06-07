//반복문 for
//선언, 조건, 증감문 형태로 이뤄진 반복문
//조건문이 fail이 되기 전까지 코드 블록을 계속적으로 반복 수행
//선언 조건 증강문 자리에 공백 입력 가능

// for (let i= 0; i < 3; i++) {
//     console.log(i);
// }

// for (let i = 10; i < 3; i++) {
//   console.log(i);
// }

// let num = 0;
// for (; num < 2;) {
//   console.log(num);
//   num++;
// }


//2중 for 예제
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
  console.log(`${i} + ${j} = ${i + j}`);
   }
}

//반복문 for(확장)
// for..in 반복문
// 객체의 key, value 형태를 반복하여 수행하는데 최적화 된 유형
//첫번째부터 마지막까지, 객체의 키 개수만큼 반복

//for...of 반복문
//collection 객체 자체가 symbol.iterator속성(property)을 가지고 있어야 동작 가능한 유형
//es6에 새로 추가된 collection 기반의 반복 구문

//=> 확장 보다는 일반for 반복문을 사용하도록 하자