# Makeup Product

> 내가 원하는 화장품을 쉽게 찾을 수 있는 웹 서비스

<br>

- 배포 url: https://makeup-product.vercel.app/
  
- 상품 타입, 카테고리, 태그 별로 상품을 찾아볼 수 있습니다.

<br>

## 기술스택

Frameworks: `Next.js 13` \
Languages: `TypeScript` \
CSS Framework: `Tailwind CSS` \
React UI Tool: `MUI` \
State Management: `React Query`, `Zustand` \
Code Formating: `Prettier`, `ESLint` \
Package Manager: `Yarn`

<br>

## 프로젝트 진행 단계

### 1단계: 기본 레이아웃 구현

- **헤더**

- **GNB (Global Navigation Bar)**
  - 상품 타입

- **SNB (Side Navigation Bar)**
  - 상품 필터 ( 카테고리, 태그 )

- **본문**
  - 상품 리스트 ( 상품 이미지, 이름, 브랜드, 카테고리, 가격 )

<br>

### 2단계: API 연동 및 데이터 표시

- **조회 API 연동**
  - 전체 상품 리스트
  - 상품 필터링된 리스트 ( 타입별, 카테고리별, 태그별 )

- **Skeleton UI 추가**
  - 상품이 많아 렌더링되는데 시간이 오래걸리는 문제가 발생하여 사용자 경험 향상을 위해 적용

- **Floating Up Button 추가**
  - 상품이 많아 스크롤하는 데 불편함이 있어서 적용
  - 누르면 맨 위로 스크롤되게끔 구현

<br>

## 프로젝트 실행 방법

1. Env 세팅
root directory
```shell
NEXT_PUBLIC_API = 
```

<br>

2. 프로젝트 실행
```shell
# 필요한 모듈 설치
yarn

# 프로젝트 실행
yarn dev
```
