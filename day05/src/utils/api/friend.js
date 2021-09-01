/* 
    export로 내보내면 {} 삽입, export default로 내보내면 {} 생략

    export
    export할 파일소스내의 클래스(함수, 변수등 모든 정의되것들)들중 위 답변 “import {그안에 들어있는 것들중1, 것들중2,것들중3, 계속추가} from 파일.js” 처럼 특정해서 사용됨

    export default
    1. 복수의 함수가 있는 라이브러리 형태의 모듈
    2. 개체 하나만 선언되어있는 모듈
    3. 같은 소스내에 export default로 정의한 것들이 여러개 있다하더라도 제일처음 정의 한건만 가능
*/
export default [
    {
      id: 1,
      name: '유재석',
      age: 35,
      image:
        'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201808%2F20180828141741978.jpg',
    },
    {
      id: 2,
      name: '이효리',
      age: 33,
      image:
        'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202009%2F2020090618264387.jpg',
    },
    {
      id: 3,
      name: '이승기',
      age: 28,
      image:
        'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F157%2F202005111349228681.png',
    },
    {
      id: 4,
      name: '아이유',
      age: 26,
      image:
        'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202103%2F20210324142444281.jpg',
    },
    {
      id: 5,
      name: '블랙핑크 지수',
      age: 22,
      image:
        'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202010%2F20201001130749586.jpg',
    },
];