# Goodoc Socdoc Web 

## 설치

### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

### Installation
1. Clone the repository
2. Install the NodeJS dependencies: `npm install`.
3. Install the Bower dependencies: `bower install`.
4. Run the gulp dev task: `gulp dev`.
5. Run the gulp build task: `gulp build`.
6. Run the gulp deploy(s3) task: `gulp deploy`

[URL](http://test-goodoc-socdoc.s3-website-ap-northeast-1.amazonaws.com/)

### Develop Web Server
server on [http://localhost:8888](http://localhost:8889)

### Release note

## 1.0.0(2016/9/9)
- iOS Dynamic Links 연동 및 Launch Kit URL 연동
- 디폴트 페이지 iOS / Android 버튼 통합 (PC : Launch Kit , mobile : OS에 맞는 스토어로 이동(Dynamic Links))

## 0.9.2(2016/9/5)
- 이미지 노드 없을때 예외처리
- 후기글 전,후 사진 없을때 콘텐츠 높이 값 처리

### 0.9.1(2016/8/30)
- Dynamic Link 안드로이드 적용

### 0.9.0(2016/8/26)
- 테스트 릴리즈
- 기본 기능 및 UI 구현 완료

#### 0.8.9(2016/8/10)
- 초기세팅 커밋
- HTML5모드 추가 및 ! prefix 추가
- 기본구조 세팅(controller, template)