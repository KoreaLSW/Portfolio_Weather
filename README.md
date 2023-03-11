# 날씨알리미 프로젝트

#### 📝 개요
+ KaKaoMap API와 OpenWeather API를 사용해서 날씨알리미 프로젝트를 해보았습니다.
+ 현재기온, 시간별 및 날짜별 기온, 위치별 기온의 기능을 만들었습니다.
+ TanStack Query라이브러리를 사용하여 상태관리를 하였습니다.

#### ⚒ 사용 기술
+ HTML, CSS, JAVASCRIPT, REACT
+ Axios, React-icons, TanStack Query

#### 🔗 공유 링크
https://friendly-torrone-28699c.netlify.app/

#### 📗  파일 구조
📦src <br/>
 ┣ 📂api <br/>
 ┃ ┗ 📜weatherAPIs.js <br/>
 ┣ 📂component <br/>
 ┃ ┣ 📂clock <br/>
 ┃ ┃ ┣ 📜Clock.jsx <br/>
 ┃ ┃ ┗ 📜Clock.module.css <br/>
 ┃ ┣ 📂navbar <br/>
 ┃ ┃ ┣ 📜Navbar.jsx <br/>
 ┃ ┃ ┗ 📜Navbar.module.css <br/>
 ┃ ┗ 📂notfound <br/>
 ┃ ┃ ┣ 📜NotFound.jsx <br/>
 ┃ ┃ ┗ 📜NotFound.module.css <br/>
 ┣ 📂hooks <br/>
 ┃ ┗ 📜useMapWeather.jsx <br/>
 ┣ 📂javascript <br/>
 ┃ ┣ 📜ui.js <br/>
 ┃ ┗ 📜unixTimeConvert.js <br/>
 ┣ 📂pages <br/>
 ┃ ┣ 📂home <br/>
 ┃ ┃ ┣ 📜Home.jsx <br/>
 ┃ ┃ ┗ 📜Home.module.css <br/>
 ┃ ┣ 📂location <br/>
 ┃ ┃ ┣ 📜Location.jsx <br/>
 ┃ ┃ ┣ 📜Location.module.css <br/>
 ┃ ┃ ┣ 📜LocationDetail.jsx <br/>
 ┃ ┃ ┗ 📜LocationDetail.module.css <br/>
 ┃ ┗ 📂weather <br/>
 ┃ ┃ ┣ 📜Weather.jsxv <br/>
 ┃ ┃ ┣ 📜Weather.module.css <br/>
 ┃ ┃ ┣ 📜WeatherDetail.jsx <br/>
 ┃ ┃ ┣ 📜WeatherDetail.module.css <br/>
 ┃ ┃ ┣ 📜WeatherItem.jsx <br/>
 ┃ ┃ ┗ 📜WeatherItem.module.css <br/>
 ┣ 📜App.css <br/>
 ┣ 📜App.js <br/>
 ┣ 📜App.test.js <br/>
 ┣ 📜index.css <br/>
 ┣ 📜index.js <br/>
 ┣ 📜logo.svg <br/>
 ┣ 📜reportWebVitals.js <br/>
 ┗ 📜setupTests.js <br/>
 
#### 🎥 프로젝트 영상

|웹페이지|모바일페이지|
|------|---|
|![youtube (1) (1) (1)](https://user-images.githubusercontent.com/89916970/224364664-47e01a7a-70b7-4200-aa85-6d70bfa63ee2.gif)|![모바일유투브 (1) (1)](https://user-images.githubusercontent.com/89916970/224376924-7d432a43-f5bc-4a19-9af8-29775fad52b0.gif)|


#### ✨ 느낀점
+ YouTuBeAPI 공식 문서를 읽으며 프로젝트를 만들면서 API를 통한 네트워크통신에 많은 도움이 되었습니다.
+ React의 랜더링이 어떤식으로 흘러가는지 알게되었습니다.
+ Tanstack Query을 사용하면서 비동기통신을 간단하게 하는 방법을 알게되었습니다.






