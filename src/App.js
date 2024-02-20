
/**
 * react component 특징
 * 1. 파일명과 함수명을 일치시킨다.
 * 2. 하나의 컴포넌트 함수는 하나의 태그 묶음만 리턴할 수 있다. 
 * 3. 함수를 꼭 export 해야한다.
 */
import { useState } from "react";

 

export default function App() {
  let names = ["김준일", "김준이", "김준삼"];
  // [ <h1>김준일</h1>, <h1>김준이</h1>, <h1>김준삼</h1> ]
  const [ nameArrayState, setnameArrayState ] = useState(["김준일", "김준이", "김준삼"]);
  // 상태관리
  // 상태가 변하면 렌더링이 다시 된다.


  // 비구조 할당
  const { name, age } = { name: "김준일", age: 31 };
  const [ num1, num2, num3, num4 ] = [ 1, 2, 3, 4 ];

  console.log("콘솔 호출?");

  const handleClick = () => {
    setnameArrayState([ ...nameArrayState, "김준사" ]);
    console.log(names);
}
  return <>
    <button onClick={handleClick}>추가</button>
    <div>
      { nameArrayState.map(name => <h1>{ name }</h1>) }
    </div>
  </>;
}

