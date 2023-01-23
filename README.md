
# 쇼핑몰 사이트 만들기 예제

## 1. 화면디자인

* html + css

## 2. 데이터 생성

### 2.1 maridb 설치

* docker를 이용한 설치

  `:> docker pull mariadb`

* 다운로드 완료 후 `:> docker imag ls` 로 확인
* docker image를 이용하여 container 실행: 각각의 이름은 mariadb

  `:> docker run --name mariadb -d -p3307:3306 -e MYSQL_ROOT_PASSWORD=mariadb mariadb`

* 실행확인 : `:> docker ps`
* container 환경으로 들어가기
`:> docker exec -it mariadb /bin/bash`

* mysql client 실행

  `:/# mysql -u root -p`

  `mariadb[(none)]> status`

### 2.2 무료 DB 툴(GUI) 설치

* [dbeaver](https://dbeaver.io/download/ "ERD 표현 가능")
* [HeidiSQL](https://www.heidisql.com/download.php "가볍고 보기 편함")
  * databse 생성
  * table 생성
  * data 생성

## 3. 서버 프로그램 작성 및 시험

### 3.1 서버 프로그램 작성(js에 의한 db연동)

* server folder 생성 및 모듈 설치

  `server:> npm init` # package.jon 생성

  `server:> npm i express --save`

  `server:> npm i express-session --save`

  `server:> npm i mysql --save`

### 3.2 [postman](https://www.postman.com/downloads/) 활용

* client 개발시 서버가 준비되지 않은 상태에서 유용

* server 개발시 client 대용으로 활용

## 4. Vue를 이용한 화면 구현

### 4.1 Vue 설치(client 용으로)

* product 폴더로 이동하여 설치

  `product:> npm i -g @vue/cli`

* client 프로그램 만들기

  `product:> vue create client` # 선택내용: [vu3 preview]

  `client:> npm run serve` 로 실행

  `client:> vue add router` # 모듈 추가 y, y 2번

  `client:> npm i bootstrap --save`
