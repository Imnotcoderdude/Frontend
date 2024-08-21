# Eleven-Book-shelf

## 📚 웹툰과 웹소설을 좋아하는 사람들을 위한 커뮤니티 서비스 📚

## 📚 각 서비스 링크 🥓
| backend                                                           | frontend                                                                                                  |
|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
|[![175937078](https://github.com/user-attachments/assets/f698da5a-41d6-4401-afe8-f5d05152794e)](https://github.com/eleven-Book-shelf/Eleven-Book-shelf) |[![175937078](https://github.com/user-attachments/assets/f698da5a-41d6-4401-afe8-f5d05152794e)](https://github.com/eleven-Book-shelf/Frontend)  |

## 🏂 팀원 소팀원 소개 🌌

| ![161007461](https://github.com/user-attachments/assets/d06a5694-d079-4b5f-a9be-6db2a02e2945) | ![167049108](https://github.com/user-attachments/assets/5a5550d8-66ee-4dfa-a59d-569c1fe62706) | ![154627607](https://github.com/user-attachments/assets/985e4b7b-60ca-4c85-a853-182427665fed) | ![109952440](https://github.com/user-attachments/assets/b1a8c167-2e73-4b0e-9f38-b6ea30a8ed91) |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| 한정운                                                                                           | 김민식                                                                                           | 조규성                                                                                           | 이민호                                                                                           |
| 팀장                                                                                            | 팀원                                                                                            | 팀원                                                                                            | 부팀장                                                                                           |
| 사용자 기능                                                                                        | 댓글 기능                                                                                         | 크롤링 기능                                                                                        | 게시판 기능                                                                                        |
| (소셜) 로그인 / 로그아웃                                                                               | 북마크 기능                                                                                        | 컨텐츠 조회                                                                                        | 추천 기능                                                                                         |
| 프론트엔드                                                                                         | 좋아요 기능                                                                                        | 배포, CI                                                                                        |                                                                                               |





# 💻주요기능
#### 정보 공유 커뮤니티, 코드 리뷰 기능, 코드 카타 & 챌린지 기능, 포인트 기능

<details>
<summary>커뮤니티 기능</summary>
<div markdown="1">

![image](https://github.com/user-attachments/assets/0102e387-b5ef-437a-94ec-4f0ddcf27d4a)

**검색 기능과 인기 검색어**
- 현재 사람들이 가장 많이 검색하는 검색어는 뭘까?
- 개발자는 오픈마인드! 서로 정보를 공유해봅시다
</div>
</details>

<details>
<summary>코드 리뷰</summary>
<div markdown="1">

![image](https://github.com/user-attachments/assets/ec2298b8-3797-4f1e-a6b3-11b04f9ca20f)

**코드 리뷰**
- 어떤 언어든 OK
- 내 코드를 사람들과 공유해봅시다

</div>
</details>

<details>
<summary>코드 카타 & 챌린지 기능</summary>
<div markdown="1">

![image](https://github.com/user-attachments/assets/2c43f1d8-5bd0-476e-8a0a-884f2faf00e7)

**오늘의 코드카타를 확인해보세요**
- 코드카타 참여하기를 누르면 팀이 매칭됩니다!


![image](https://github.com/user-attachments/assets/bd3bfe46-85ee-4884-8812-4054780f0ab1)

**팀원들과 소통하면서 코드카타를 풀어보세요**
- 웹 코드 컴파일 기능과 실시간 채팅으로 팀원들과 소통해보세요

![image](https://github.com/user-attachments/assets/614b2043-24fb-4fb2-96e7-2e8a4f1c88e2)
![image](https://github.com/user-attachments/assets/0ba493be-a55b-4851-bc55-75b8e10f38f6)
</div>
</details>


<details>
<summary>포인트 기능</summary>
<div markdown="1">

![image](https://github.com/user-attachments/assets/e3c3d4eb-395b-4360-8fb8-0daf6de7268a)

**활동을 통해 포인트를 모으고 계급을 올려봅시다**
- 게임에선 브론즈였던 내가 여기선 어디까지 갈 수 있을까요?

</div>
</details>
</div>

<details>
<summary> 🗒️ API 명세서</summary>
<div markdown="1">


</div>
</details>

<details>
<summary>🎹 협업툴</summary>
<div markdown="1">



## Github Rules


**프로젝트 규칙 ()**


	📒** issue 잘 작성하기
	**📆** 일정 관리 작성 후 신경쓰며 코딩

**📢 PR할 때 슬랙에 알리기**


	💬 PR 후 슬랙 남기기
	💬 PR 피드백 남기기

**📅 계획표 잘 작성하기**


	🌉 branch 변경 확인하기
	****✅ commit 하기 전에 Git Rules&commit 내용 확인하기
	📮 사소한 트러블 슈팅도 공유하기


</div>
</details>

<div id = "ERD">

# 🎫ERD🎫

![11 (1)](https://github.com/user-attachments/assets/73401de7-f528-4e34-b20d-9c7a82bb6f69)


</div>

<div id = "서비스 아키텍쳐">

# 📋 아키텍쳐 📋 

![아키텍쳐 drawio (1)](https://github.com/user-attachments/assets/2c677bbe-1dfc-48ad-aeee-d9e5aeccacab)


<div id ="decision">

# 기술적 의사결정
<details>
<summary>SpringBatch, Quartz</summary>
<div markdown="1">

#### Spring Batch

• CodeKata와 챌린지 기능, 사용자 데이터 분석에서 대용량의 데이터를 효율적으로 처리를 위한 프레임워크로 활용




#### Quartz


• Cron 표현식을 통한 유연한 작업 스케줄링과 세밀한 시간 제어에 사용

• Spring Batch 데이터의 안정적인 스케쥴링 처리 환경을 구성에 활용


</div>
</details>

<details>
<summary>Redis(EmbeddedRedis)</summary>
<div markdown="1">


#### 다양한 데이터 타입과 기능 지원


• 직접적으로 DB를 사용하지 않고도 리소스를 덜 사용할 수 있는, 효율적이고 빠른 데이터 처리의 인메모리 방식

• String, Hash, Sorted Set, List, Set 등 다양한 자료 구조를 제공하여 실시간 채팅, 검색어 순위, 토큰 재발급에 활용


#### 테스트 환경에서 활용

• 테스트 코드에서 실제 Redis의 기능의 EmbeddedRedis 통해 로컬 환경에서 검증하고 테스트

</div>
</details>

<details>
<summary>GitHub Actions</summary>
<div markdown="1">

#### GitHub Repository와의 통합유연성
• GitHub과 통합하여 CI/CD 파이프라인을 구축가능, 타 독립적인 CI/CD 서버와 비교해 별도의 환경 설정이 불필요


#### 유연한 워크플로우
• 개발자 요구에 맞게 직접 액션을 만들어 워크플로우를 유연하게 변경하거나 확장, 빌드 및 배포 파이프라인을 쉽게
유지보수 가능
</div>
</details>

<details>
<summary>Dockerhub</summary>
<div markdown="1">

#### 컨테이너화를 통한 일관적인 배포
• FE와 BE를 독립적으로 컨테이너화하여 개별 유지보수와 추가적인 확장성 확보


#### Dockerhub 중앙관리
• 컨테이너 이미지 중앙 관리와, Scale Out 에 대응하여 동일한 환경 구성 유용성


#### CI/CD 파이프 라인 구축 유용성
• GitHub Actions와의 통합 유용성으로 빌드한 이미지를 Dockerhub에 푸시하고 자동화된 배포 지원
</div>
</details>

<div id ="trouble">

# 🛠️ 트러블 슈팅
<details>
<summary>EmbeddedRedis 적용 시 테스트코드 에러 발생</summary>
<div markdown="1">

![image](https://github.com/user-attachments/assets/c2feaedc-da85-4ff3-89c2-4e9289284e31)

#### 통합 테스트 실행 시, 모든 도메인에 대해 작성된 테스트 코드에서의 embeddedRedis의 Bean의 생성 실패로 인해 정상적인 테스트코드 미작동
• 동시에 GitHub Actions CI 환경에서도 동일하게 Bean등록 실패로 인한 ContextLoad 의 FAIL EmbeddedRedis 적용 시 테스트코드 에러 발생


#### 디버그 모드에서 Redis 서버의 동작을 분석한 결과, 테스트 코드 실행 중에 이미 실행 중인 Redis 서버가 중복으로 시작될 수 없어(Can’t start redis server.) 여러 예외가 발생
• EmbeddedRedisConfig에서, Redis 서버가 시작되지 않거나, 포트 충돌로 인해 이미 다른 프로세스가 포트를 점유한 상태로 파악


#### EmbeddedRedisConfig에서 Redis 서버의 시작 및 종료 메서드에 포트 사용 여부를 검사하는 로직을 추가
• Port가 다른 프로세스에 의해 사용 중이지 않을 때만 Redis 서버가 실행되도록 수정
• Windows OS 로컬 개발 환경, GitHub Actions의 Unix-like OS에 각각 대응 OS 별 Port 명령어를 실행

</div>
</details>

<details>
<summary>CodeKata Compile 언어별 속도 차이</summary>
<div markdown="1">

![image](https://github.com/user-attachments/assets/d4b7cd1a-3a95-4202-a0f9-b5396d74c7bc)

#### CodeKata에서 Python 및 JavaScript와 같은 언어에 비해 Java 코드 답변 시간이 상대적으로 비정상적으로 더 오래 측정되는 현상 발견
• CodeKata Challenge에서 Java 언어를 사용해서 참여하는 개발자들에게 불리하게 작용


• Java 코드의 경우, Spring Boot 애플리케이션 내에서 Gradle을 통해 컴파일 및 실행되므로 컴파일 시간이 추가로 소요


• 컴파일 시간을 제외함으로써 응답하는 Java 코드 실행 시간이 약 86% 감소 비정상적인 실행 시간 현상 해소로 다른 언어와 유사하도록 해결

</div>
</details>

<details>
<summary>Nginx의 404 Not Found 에러</summary>
<div markdown="1">

![image](https://github.com/user-attachments/assets/192663f0-edf9-4492-a12f-a4639919fa06)

#### 브라우저에서 AWS 인스턴스에 배포된 서비스에 접근할 때, 새로 고침하거나 URL을 통해 직접 접근하면 지속적으로 Nginx 404 Not Found 오류가 발생
• nginx.conf 설정 파일을 수정했음에도 불구하고, 문제가 지속적으로 발생

#### React 이미지를 시, Nginx를 포함시켜 React 컨테이너의 Nginx가 실행되면서 두 개 Nginx 컨테이너가 동시에 인스턴스에 존재를 확인
• 인스턴스 내의 불필요한 외부 Nginx 컨테이너를 삭제


• Nginx 컨테이너에서 설정한 nginx.conf를 React 컨테이너 Nginx에만 적용하도록 Dockerfile을 수정
배포를 정상적으로 진행

</div>
</details>
