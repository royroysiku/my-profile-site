# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

개인 프로필 포트폴리오 웹사이트. 정적 HTML/CSS/JavaScript 사이트로 빌드 시스템이 없습니다.

## 파일 구조

- **index.html** - 전체 웹사이트 (Tailwind CSS CDN 사용)
- **style.css** - 커스텀 스타일, Glass Morphism 효과, 애니메이션
- **script.js** - 네비게이션, 스크롤 효과, Intersection Observer 기반 페이드인
- **CLAUDE.md** - 이 파일

## 개발 서버 실행

### Python 사용 (권장)
```bash
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080` 방문

### Node.js 사용
```bash
npx serve
```

## 기술 스택

- **Tailwind CSS** - CDN 사용 (`https://cdn.tailwindcss.com`)
- **Google Fonts** - Noto Sans KR (한글 지원)
- **Vanilla JavaScript** - 의존성 없음
- **CSS3** - 애니메이션, Glass Morphism, Gradient

## 디자인 특징

### 색상 팔레트
- 배경: `slate-950`, `slate-900`
- 액센트: Blue (`#60a5fa`), Indigo (`#6366f1`)
- 테두리/유리 효과: `rgba(100, 116, 139, 0.2)`

### 주요 컴포넌트

#### `.glass-card`
반투명 유리 효과가 있는 카드. `backdrop-filter: blur(10px)` 사용. 호버 시 배경과 테두리 밝아짐.

#### `.badge`
프로젝트 태그. 그라디언트 배경과 선택적 테두리.

#### Fade-in 애니메이션
`Intersection Observer`로 뷰포트 진입 시 요소가 페이드인. `.fade-in` 클래스와 `.visible` 상태로 제어.

## 페이지 섹션

1. **네비게이션** - 고정 상단바, 스크롤 시 배경색 추가, 모바일 메뉴
2. **Hero** - 이름, 역할, CTA 버튼
3. **About** - 소개 텍스트와 아이콘
4. **기술 스택** - HTML, CSS, JavaScript 카드 (3열 그리드)
5. **프로젝트** - 2개 프로젝트 카드 (2열 그리드)
6. **연락처** - 전화, 이메일, GitHub 링크 (3열 그리드)
7. **Footer** - 저작권 정보

## 수정 가이드

### 콘텐츠 변경
- 이름, 역할, 소개: `index.html`의 hero 섹션과 heading 요소 수정
- 프로젝트 추가: `#projects` 섹션에 새 `.project-card` 추가
- 연락처: `#contact` 섹션의 링크 수정

### 섹션 추가
1. `index.html`에 새 `<section id="section-name">` 추가
2. 네비게이션 메뉴에 링크 추가 (`<a href="#section-name">`)
3. `script.js`의 Intersection Observer 등록 자동 처리 (이미 모든 섹션을 감시)

### 스타일 커스터마이징
- Tailwind 클래스로 대부분 처리 가능
- 커스텀 효과는 `style.css`에 추가
- 색상 변경: Tailwind 색상 클래스 또는 CSS 변수 사용

## 반응형 디자인

- 모바일 우선 접근
- `md:` 프리픽스로 768px 이상에서 레이아웃 변경
- 모바일 메뉴는 768px 이하에서 표시

## 성능 고려사항

- Tailwind CDN 사용 (프로덕션에서는 JIT 빌드 권장)
- Google Fonts는 필요시 다운로드 (WOFF2 포맷)
- JavaScript는 바닐라 (의존성 없음)
- 이미지 최적화 필요 시 WebP 형식 고려

## 검증 체크리스트

- [ ] 로컬 서버에서 모든 섹션 페이지 로드
- [ ] 네비게이션 링크 클릭 시 부드러운 스크롤
- [ ] 스크롤 시 navbar 배경색 전환 확인
- [ ] 모바일 해상도 (375px, 768px)에서 레이아웃 정상
- [ ] 모바일 메뉴 토글 동작
- [ ] 연락처 링크 (전화, 이메일, GitHub) 동작
- [ ] 브라우저 개발자 도구에서 성능(Lighthouse) 확인
