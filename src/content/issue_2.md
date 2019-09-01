---
title: '2019년 7월 모임'
date: '2019-07-29'
path: '/issues/2/'
excerpt: 'GraphQL: The Documentary'
---

#### [GraphQL: The Documentary](https://www.youtube.com/watch?v=783ccP__No8&feature=youtu.be)

`english` `video` `graphql`

프로그래밍을 주제로 해서 이렇게 아름다운 다큐멘터리를 본적이 있나요?

GraphQL을 처음 개발했던 계기, 최초 개발에 참여했던 세명의 개발자들(Lee Byron, Dan Schafer and Nick Schrock)과의 인터뷰 등의 영상을 웰메이드 다큐멘터리로 제작했네요. 더불어 이전에 [Ember.js](https://www.youtube.com/watch?v=Cvz-9ccflKQ)를 주제로 만들어졌던 다큐멘터리 영상도 꼭 보세요.

---

#### [TRACKIT에서 딥링크를 사용하는 방법](https://engineering.linecorp.com/ko/blog/how-to-use-deeplink-in-trackit/)

`한글` `deeplink`

LINE에서 TRACKIT이라는 트래킹 서비스를 개발하면서 적용했던 딥링크에 대해서 설명하고 있습니다. 딥링크의 전체적인 개념이나 활용법에 대해서 깔끔하게 설명하고 있으므로 딥링크를 사용해야하는 모바일 어플리케이션 개발자들에게 매우 유용한 글입니다.
딥링크의 방법 중 하나인 URL Schema를 iOS & Android에서 사용하는 방법 및 한계점, 이러한 한계를 극복하기 위한 Universal Link와 App Link 소개, 앱이 설치되어 있지 않을 경우에도 사용할 수 있는 Deferred Deeplink 까지 자세하게 설명하고 있습니다.

---

#### [The Complete Introduction to React](https://jscomplete.com/learn/complete-intro-react)

`english` `react`

React를 처음 접하시는 분들이 쉽게 시작할수 있도록 만들어진 인터랙티브 튜토리얼 입니다.

React 자체가 다른 라이브러리들과 비교해서 배우기 쉽고 공식 문서도 잘 되있지만, 입문자가 React를 시작하면서 가질법한 질문들에 대한 설명도 잘 정리되어 있고, 단락 끝 부분마다 간단히 실습해볼 수 있는 기능도 있어서 React를 이제 막 배워 보려는 분들께 매우 유용할듯 합니다.

---

#### [One simple trick to optimize React re-renders](https://kentcdodds.com/blog/optimize-react-re-renders)

`english` `react`

React 컴포넌트가 리렌더링(re-rendering) 될 때 퍼포먼스를 최적화 할 수 있는 팁을 소개하고 있습니다.

```javascript
function Logger(props) {
	console.log(`${props.label} rendered`);
	return null;
}

function Counter() {
	const [count, setCount] = React.useState(0);
	const increment = () => setCount(c => c + 1);
	return (
		<div>
			<button onClick={increment}>The count is {count}</button>
			<Logger label="counter" />
		</div>
	);
}

ReactDOM.render(<Counter />, document.getElementById('root'));
```

위의 샘플 코드를 보면 버튼이 클릭될 때마다 \<Logger /\> 컴포넌트가 계속해서 실행되는데 아래와 같이 \<Logger /\> 컴포넌트를 \<Counter /\> 컴포넌트의 props로 전달하면 한번 생성된 \<Logger /\> 컴포넌트 인스턴스가 재사용 되므로 결과적으로 \<Logger /\> 컴포넌트가 계속해서 실행되는 것을 방지할 수 있다는 것입니다.

```javascript
function Logger(props) {
	console.log(`${props.label} rendered`);
	return null;
}

function Counter(props) {
	const [count, setCount] = React.useState(0);
	const increment = () => setCount(c => c + 1);
	return (
		<div>
			<button onClick={increment}>The count is {count}</button>
			{props.logger}
		</div>
	);
}

ReactDOM.render(<Counter logger={<Logger label="counter" />} />, document.getElementById('root'));
```

결론은, "렌더링 비용이 비싼 복잡한 컴포넌트는 가급적 상위 컴포넌트에서 props를 통해서 전달하는 방법을 사용해서 리렌더링 비용을 줄일 수 있다" 입니다.

---

#### [Vue를 좋아하는 몇가지 이유](https://daverupert.com/2019/07/what-i-like-about-vue/)

`english` `vue`

저자가 밝히는 Vue 프레임웍을 좋아하는 이유입니다.
첫째, 별도의 라이브러리나 툴 없이 템플릿, 자바스크립트, 스타일을 모두 하나의 파일에서 작성할 수 있다는 점, 둘째, 빌드 과정 없이 Vue를 바로 사용할 수 있다는 점, 셋째, 이미 존재하는 서버 렌더링 웹사이트에 쉽게 Vue를 사용할 수 있다는 점, 넷째, 플러그인 생태계가 아주 잘 갖춰져 있다는 점, Nuxt로 프로젝트를 구성할 경우 잘 구성된 컨벤션 기반의 폴더 구조를 사용할 수 있다는 점을 들었습니다.

개인적으로 Vue의 가장 큰 장점은 빌드 과정 없이 Vue를 바로 사용할 수 있어서 기존 레거시 웹사이트에 적용하기가 매우 쉽다는 점이 아닐까 합니다.
