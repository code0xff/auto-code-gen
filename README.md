# Automatic Code Generator

## Intro
  - Automatic Code Generator는 개발시에 한국어로 정의된 비지니스 용어를 영문 코드로 변경시켜야 하는 경우, 편의를 제공하기 위해 개발된 유틸리티성 프로그램입니다.
  - 화면은 입력을 받기 위한 부분과 어떤 형태의 코드로 변환할 것인지 선택할 수 있는 버튼으로 구성되어 있습니다. 총 5개의 타입을 제공하며, 대문자와 underbar로 구성된 스네이크 케이스, 그리고 소문자와 underbar, 소문자 hyphen으로 구성된 스네이크 케이스가 있습니다. 또한 UpperCamelCase, lowerCamelCase 등이 제공됩니다.
  - 어플리케이션은 한글을 입력받았을 시, 네이버 파파고 api를 호출하여 영문으로 변환되며, 공백을 기준으로 위에서 언급한 타입이 적용되게 됩니다.
  
## 주요 Spec
  - Electron: v5.0.6
  - React.js: v16.8.6
  - Webpack: v4.35.0
  - Babel: v7.4.5

## Build
```
npm run build
```

## Start
```
npm start
```

## Deploy
```
npm run dist
```
