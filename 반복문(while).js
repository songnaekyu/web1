//조건문이 참일 때 코드블록을 계속해서 반복 수행하는 반복문
//for문에 비해 선언,증감문이 없이 loop를 수행하며 , 무한 loop등 수행시 많이 사용
//조건문을 코드 블록보다 아래로 옮긴 do...while반복문도 존재(최소 한번 수행이 필요할 때 많이 사용)

let i = 0;
while (i <3) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while(i <3);

i = 4;
do {
  console.log(i);
  i++;
} while (i <3);
