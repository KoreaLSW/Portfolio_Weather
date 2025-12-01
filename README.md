# 날씨알리미 프로젝트

#### 📝 개요

현재 내가 살고있는 위치와 내가 알고싶은 위치의 날씨를 간단하게 확인 할 수 있는 프로젝트입니다.

- KaKaoMap API와 OpenWeather API를 사용해서 날씨알리미 프로젝트를 해보았습니다.
- 현재기온, 시간별 및 날짜별 기온, 위치별 기온의 기능을 만들었습니다.
- TanStack Query라이브러리를 사용하여 상태관리를 하였습니다.

#### ⚒ 사용 기술

- HTML, CSS, JavaScript, ReactJS
- Axios, React-icons, TanStack Query

## 🛠️ 라이브러리 선택 이유

### 1. **Axios**

**선택 이유:**

- Promise 기반의 직관적인 API
- 요청/응답 인터셉터 지원
- 자동 JSON 변환
- 에러 처리 용이

### 2. **TanStack Query (React Query)**

**선택 이유:**

- 서버 상태 관리에 최적화된 라이브러리
- 자동 캐싱 및 리밸리데이션 기능으로 불필요한 API 호출 최소화
- `staleTime` 설정으로 성능 최적화 가능
- 로딩, 에러 상태를 자동으로 관리

### 3. **React Router DOM**

**선택 이유:**

- React 표준 라우팅 라이브러리
- 중첩 라우팅 지원 (`<Outlet />`)
- 클라이언트 사이드 라우팅으로 빠른 페이지 전환

---

## 느낀점

리액트에서 가장 많이 사용되는 useState와 useEffect의 동작 원리를 이해하는 데 큰 도움이 되었으며, Axios를 활용한 API 통신과 TanStack Query를 통한 상태 관리 및 캐싱 전략을 경험할 수 있는 좋은 계기가 되었습니다.

---

#### 🔗 공유 링크

https://friendly-torrone-28699c.netlify.app/

---

#### 🎥 프로젝트 영상

| 웹페이지                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- |
| ![날씨알리미](https://user-images.githubusercontent.com/89916970/224506532-3e7c9457-aa42-4b3d-8bca-8c6484807c0f.gif)   |
| ![날씨알리미01](https://user-images.githubusercontent.com/89916970/224506132-da3db601-c3a2-4b61-9dad-5783c15418e6.png) |
| ![날씨알리미02](https://user-images.githubusercontent.com/89916970/224506135-d959b19d-9f49-481d-98ef-128fe72a93f1.png) |
| ![날씨알리미03](https://user-images.githubusercontent.com/89916970/224506136-80fad40a-225c-4603-b2dd-f55d03c37592.png) |
