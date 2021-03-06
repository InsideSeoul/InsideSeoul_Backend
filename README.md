# HiSeoul_Backend
* HiSeoul (Seoul App Competition 2017) Backend Server

* 모든 요청은 POST, FormUrlEncoded로 처리하였습니다.

## Server Code
### 200

    Success Processing Request

### 401

    Request Data Incorrect
    
### 403

    Already In Database
    
### 404

    DATA Not Founded
   
### 500

    Server Error

    
## API DOCUMENT

### Auth

#### /auth/login (로그인)
>Requiring Params

    id : User_ID
    password : User_Password
    
>Return Values
>>Success
    
    HTTP : 200
    UserDATA : JSONObject    
    
>>Data Incorrect
    
    HTTP : 401
    
>>Not Founded

    HTTP : 404
    
#### /auth/register (회원가입)
>Requiring Params
    
    username : UserName
    id : User_ID
    password : User_Password
    language : User_Language
    
>Return Values
>>Success

    HTTP : 200
    UserDATA : JSONObject
    
>>Already In Database

    HTTP : 403
    
#### /auth/findpassword (비밀번호 찾기)
>Requiring Params

    username : UserName
    id : User_ID
    email : Email to receive password
    
>Return Values
>>Success 

    HTTP : 200 , Mail Send Success
    
>>Mail Send Fail

    HTTP : 500, Fail
    
#### /auth/edituser (유저정보 수정)
>Requiring Params

    username : UserName
    id : User_ID
    language : User_Language
    
>Return Values
>>Success 
    
    HTTP : 200, Update Success

### Facebook
#### /facebook/app (페이스북 앱 로그인)
>Requiring Params

    access_token : Facebook User Token
    
>Return Values
>>Success

    HTTP : 200
    UserDATA : JSONObject
    
### Search
#### /search/yujuk (유적지 검색)
>Requiring Params

    token : User_Token
    search : Search Query(검색어)
    
>Return Values
>>Success

    HTTP : 200
    Data : JSONArray
    
### Translate
#### /translate
>Requiring Params

     source : 번역할 언어 (ko, en, ja, zh-CN)
     target : 번역되어질 언어 (ko, en, ja, zh-CN)
     text : 번역할 문장
     
>Return Values
>>Success

    HTTP : 200
    DATA : Translated Sentence
    
### List
#### /list/yujuk (유적지 데이터 리스트)
>Requiring Params

    token : User_Token
    query : Data_Length
    
>Return Values
>>Success

    HTTP : 200
    Data : JSONArray
    
#### /list/restaurant (음식점 데이터 리스트)
>Requiring Params

    token : User_Token
    query : Data_Length
    
>Return Values
>>Success

    HTTP : 200
    Data : JSONArray
    
#### /list/medi
>Requiring Params

    token : User_Token
    query : Data_Length
    
>Return Values
>>Success

    HTTP : 200
    Data : JSONArray
    
#### /list/info
>Requiring Params

    token : User_Token
    query : Data_Length
    
>Return Values
>>Success

    HTTP : 200
    Data : JSONArray
    
#### /list/emergency
>Requiring Params

    token : User_Token
    query : Data_Length
    
>Return Values
>>Success

    HTTP : 200
    Data : JSONArray

#### /list/embassy (대사관 전화번호)
>Requiring Params
    
    None Param
    
>Return Values
>>Success

    HTTP : 200
    Embassy_Number : JSONObject
    {
        주한미국대사관 : "02-397-4114",
        주한일본대사관 : "02-2170-5200",
        주한중국대사관 : "02-738-1038",
    }

    
### Road
#### /road/find
>Requiring Params

    mlocation : Start_Location
    elocation : Arrive_Location

>Return Values
>>Success

    HTTP : 200
    Parsing DATA : JSONObject
   
    
## Schema

### UserSchema

    username : {type : String}
    id : {type : String}
    password : {type : String}
    language : {type : String}
    token : {type : String}

### 유적지 정보 (KOR, ENG, CN)

>KOR

     "H_KOR_GU": "행정 구",
     "ADD_KOR_ROAD": "도로명주소",
     "H_KOR_CITY": "행정 시",
     "CATE3_NAME": "분류3",
     "ADD_KOR": "주소",
     "NAME_KOR": "명칭",
     "CATE2_NAME": "분류2",
     "MAIN_KEY": "키",
     "H_KOR_DONG": "행정 동",
     "CATE1_NAME": "분류1"
     
>ENG

    "H_ENG_CITY": "행정 시",
    "NAME_ENG": "명칭",
    "H_ENG_GU": "행정 구",
    "H_ENG_DONG": "행정 동",
    "MAIN_KEY": "메인 키"
     
   
>CN
    
    "H_CNG_CITY": "행정 시",
    "MAIN_KEY": "메인 키",
    "H_CNG_GU": "행정 구",
    "H_CNG_DONG": "행정 동",
    "NAME_CNG": "명칭"
    
### 한국 음식점 정보 (KOR, ENG, CN)

>KOR

    "H_KOR_GU": "행정 구",
    "H_KOR_CITY": "행정 시",
    "NM_DP": "검색어",
    "CATE3_NAME": "분류3",
    "NAME_KOR": "명칭",
    "CATE2_NAME": "분류2",
    "MAIN_KEY": "키",
    "H_KOR_DONG": "행정 동",
    "CATE1_NAME": "분류1"
    
>ENG

    "H_ENG_CITY": "행정시",
    "NAME_ENG": "명칭",
    "H_ENG_GU": "행정구",
    "H_ENG_DONG": "행정동",
    "MAIN_KEY": "키"
    
>CN

    "H_CNG_CITY": "행정시",
    "MAIN_KEY": "키",
    "H_CNG_GU": "행정구",
    "H_CNG_DONG": "행정동",
    "NAME_CNG": "명칭"
    
### 서울 모텔 정보 (KOR, ENG, CN)

>KOR

    "H_KOR_GU": "행정 구",
    "H_KOR_CITY": "행정 시",
    "NM_DP": "검색어",
    "CATE3_NAME": "분류3",
    "NAME_KOR": "명칭",
    "CATE2_NAME": "분류2",
    "MAIN_KEY": "키",
    "H_KOR_DONG": "행정 동",
    "CATE1_NAME": "분류1"
    
>ENG
    
    "H_ENG_CITY": "행정시",
    "NAME_ENG": "명칭",
    "H_ENG_GU": "행정구",
    "H_ENG_DONG": "행정동",
    "MAIN_KEY": "키"
    
>CN

    "H_CNG_CITY": "행정시",
    "MAIN_KEY": "키",
    "H_CNG_GU": "행정구",
    "H_CNG_DONG": "행정동",
    "NAME_CNG": "명칭"
    
### 서울 민박 정보 (KOR, ENG, CN)

>KOR

    "ROOM": "객실수",
    "H_KOR_GU": "행정 구",
    "ADD_KOR_ROAD": "도로명주소",
    "H_KOR_CITY": "행정 시",
    "NOTE": "비고",
    "ADD_KOR": "주소",
    "NAME_KOR": "상호",
    "MAIN_KEY": "키",
    "PART": "업종",
    "H_KOR_DONG": "행정 동"
    
>ENG

    "ROOM": "객실수",
    "H_ENG_CITY": "행정시",
    "NAME_ENG": "상호",
    "H_ENG_GU": "행정구",
    "H_ENG_DONG": "행정동",
    "MAIN_KEY": "키"
    
>CN

    "ROOM": "객실수",
    "H_CNG_CITY": "행정시",
    "MAIN_KEY": "키",
    "H_CNG_GU": "행정구",
    "H_CNG_DONG": "행정동",
    "NAME_CNG": "상호"
    
### 서울 외국어 가능 약국 정보 (ENG, CN)

>ENG

    "H_ENG_CITY": "행정시",
    "NAME_ENG": "약국이름",
    "TEL": "전화번호",
    "H_ENG_GU": "행정구",
    "H_ENG_DONG": "행정동",
    "MAIN_KEY": "키값"
    
>CN

    "TEL": "전화번호",
    "H_CNG_CITY": "행정시",
    "MAIN_KEY": "키값",
    "H_CNG_GU": "행정구",
    "H_CNG_DONG": "행정동",
    "NAME_CNG": "약국이름"
    
### 서울 인포메이션 센터 정보 (KOR, ENG, CN)

>KOR

    "H_KOR_GU": "행정 구",
    "TEL": "전화",
    "H_KOR_CITY": "행정 시",
    "ADD_KOR": "주소",
    "NAME_KOR": "배포장소 이름",
    "MAIN_KEY": "키",
    "H_KOR_DONG": "행정 동"
    
>ENG

    "H_ENG_CITY": "행정 시",
    "NAME_ENG": "배포장소 이름",
    "H_ENG_GU": "행정 구",
    "TEL": "전화",
    "H_ENG_DONG": "행정 동",
    "MAIN_KEY": "키"
    
>CN

    "TEL": "전화",
    "H_CNG_CITY": "행정 시",
    "MAIN_KEY": "키",
    "H_CNG_GU": "행정 구",
    "H_CNG_DONG": "행정 동",
    "NAME_CNG": "배포장소 이름"
    
### 서울 호텔 정보 (KOR, ENG, CN)

>KOR

    "H_KOR_GU": "행정 구",
    "ADD_KOR_ROAD": "도로명 주소",
    "CATE4_NAME": "분류4",
    "H_KOR_CITY": "행정 시",
    "NM_DP": "검색어",
    "CATE3_NAME": "분류3",
    "ADD_KOR": "지번 주소",
    "NAME_KOR": "명칭",
    "CATE2_NAME": "분류2",
    "MAIN_KEY": "메인 키",
    "H_KOR_DONG": "행정 동",
    "CATE1_NAME": "분류1"
    
>ENG

    "H_ENG_CITY": "행정 시",
    "NAME_ENG": "명칭",
    "H_ENG_GU": "행정 구",
    "H_ENG_DONG": "행정 동",
    "MAIN_KEY": "메인 키"
    
>CN

    "H_CNG_CITY": "행정 시",
    "MAIN_KEY": "메인 키",
    "H_CNG_GU": "행정 구",
    "H_CNG_DONG": "행정 동",
    "NAME_CNG": "명칭"

### 서울 응급실 정보 (KOR)

>KOR

    "REPRSNT_TLPHON": "대표전화",
    "AREA": "지역",
    "TM_LO": "TM경도",
    "FXNUM": "팩스번호",
    "CHILD_NIGHTCLNIC": "소아야간진료",
    "EMRRM_DIRECTTLPHON": "응급실(직통전화)",
    "SN": "연번",
    "INSTT_ADRES": "기관주소(도로명)",
    "WGS84_LA": "WGS84위도",
    "TM_LA": "TM위도",
    "PTHM_SCKBDCO": "허가병상수",
    "REPRSNT_TLPHON2": "대표전화2",
    "INSTT_CL": "기관분류",
    "ZIP": "우편번호",
    "RCPER": "요양번호",
    "INSTT_NM": "기관명",
    "WGS84_LO": "WGS84경도",
    "MDLCNST_CL": "의료기관분류"
   
### 서울 버스정류소 정보 (ENG, CN)

>ENG

    "H_ENG_CITY": "행정시",
    "NAME_ENG": "정류소명",
    "H_ENG_GU": "행정구",
    "H_ENG_DONG": "행정동",
    "MAIN_KEY": "연번",
    "MNG_NO": "정류소ID"
    
>CN

    "H_CNG_CITY": "행정시",
    "MAIN_KEY": "연번",
    "H_CNG_GU": "행정구",
    "MNG_NO": "정류소ID",
    "H_CNG_DONG": "행정동",
    "NAME_CNG": "정류소명"
    
### 서울 북촌 정보 (KOR, ENG, CN)

>KOR

    "SERVICE_OK": "SERVICE",
    "HOUSE_TYPE": "건물 종류코드",
    "PRIORITY": "우선순위",
    "HOUSE_ID": "건물 고유아이디",
    "HOUSE_ADDR": "건물 주소",
    "HOUSE_NAME": "건물 이름",
    "BOOL_CULTURE": "문화재지정 내용",
    "HOUSE_TELL": "건물 연락처",
    "LANGUAGE_TYPE": "언어별 구분코드",
    "TYPE_NAME": "건물 종류명",
    "HOUSE_OWNER": "건물 소유주",
    "HOUSE_ADMIN": "건물 관리자",
    "HOUSE_REG_DATE": "건물 지정일",
    "HOUSE_HP": "건물 홈페이지",
    "HOUSE_OPEN_TIME": "건물 개방 시간",
    "HOUSE_YEAR": "건물 연대"
    
>ENG

    "SERVICE_OK": "서비스 여부",
    "HOUSE_TYPE": "건물 타입",
    "PRIORITY": "우선순위",
    "HOUSE_ID": "아이디",
    "HOUSE_TELL": "전화번호",
    "LANGUAGE_TYPE": "언어별 구분 코드",
    "H_ENG_CITY": "행정 시",
    "NAME_ENG": "건물 명",
    "H_ENG_GU": "행정 구",
    "HOUSE_REG_DATE": "지정일",
    "HOUSE_HP": "홈페이지",
    "H_ENG_DONG": "행정 동",
    "MAIN_KEY": "메인 키",
    "HOUSE_OPEN_TIME": "개방시간",
    "HOUSE_YEAR": "연대"
    
>CN

    "SERVICE_OK": "서비스 여부",
    "HOUSE_TYPE": "건물 타입",
    "PRIORITY": "우선순위",
    "HOUSE_ID": "아이디",
    "NAME_CNG": "건물 명",
    "HOUSE_TELL": "전화번호",
    "LANGUAGE_TYPE": "언어별 구분 코드",
    "H_CNG_CITY": "행정 시",
    "HOUSE_REG_DATE": "지정일",
    "HOUSE_HP": "홈페이지",
    "MAIN_KEY": "메인 키",
    "HOUSE_OPEN_TIME": "개방시간",
    "HOUSE_YEAR": "연대",
    "H_CNG_GU": "행정 구",
    "H_CNG_DONG": "행정 동"
    
### 중구 스토리 텔링 정보 (KOR, ENG, JP, CN)

>ALL Language (예시 정보)

    "예약": "",
    "상세고유순번": "402",
    "관리번호": "JGS_000002",
    "명칭": "Jungmyeongjeon Hall of Deoksugung Palace",
    "관련항목": "",
    "연계자원": "JGH_000350",
    "경도정보(127.XX)": "126.97252",
    "위도정보(36.XXX)": "37.56659",
    "이명칭": "",
    "개요": "Jungmyeongjeon Hall, constructed in 1901, is a part of Gyeongungung which is today’s Deoksugung Palace, and it was used as the reception hall, banquet hall, and library. This was the place the banquet was held during the wedding ceremony of the Crown Prince (Sunjong) and Crown Princess Yun in 1907 and also the unfortunate place where the Japan-Korea Treaty of 1905 was concluded by force. It had been leased to foreigners in 1915 during Japanese colonial era and used as Seoul Club building.",
    "시대분류": "",
    "주제분류": "",
    "지번주소": "",
    "도로명주소": "41-11, Jeongdong-gil, Jung-gu, Seoul",
    "지역": "Jeongdong-gil, Jung-gu, Seoul",
    "제공기관": "Jung-gu Office Seoul",
    "언어유형": "ENG",
    "제작일": "12/30/15",
    "유형": "DATA",
    "형식": "HTML",
    "전화번호": "",
    "지정현황": "",
    "휴무일": "",
    "이용시간": "",
    "이용요금": "",
    "주차": "",
    "장애인편의시설": "",
    "체험안내": "",
    "안내서비스": ""
    
### 중구 역사문화 정보 (KOR, ENG, JP, CN)

>ALL Language (예시 정보)

    "등록일": "4115.0",
    "관리번호": "JGH_000179",
    "명칭": "한성부 남부관아 터",
    "관련항목": "",
    "연계자원": "",
    "경도정보": "126.9817309",
    "위도정보": "37.5647524",
    "이명칭": "",
    "지역": "서울특별시 중구 소공동",
    "지번주소": "",
    "도로명주소": "서울특별시 중구 남대문로 81(소공동 1) 일대",
    "개요": "한성부(漢城府) 남부관아(南部官衙) 터는 한성부의 남부 11방을 관할하던 관아인 남부의 부청(部廳)이 있던 곳이다. 지금의 서울특별시 중구 남대문로 81 일대에 해당한다.",
    "역사정보": "조선 초기 한성부 행정구역을 5부로 구획 1910 조선총독부지방관관제가 공포되면서 한성부가 경성부로 개칭됨",
    "시대분류": "조선/미상",
    "주제분류": "문화/유적지, 사적지/사지, 전지, 유지, 원지",
    "시작일": "미상",
    "인물": "",
    "제공기관": "서울시 중구청",
    "언어유형": "KOR",
    "제작일": "42368",
    "유형": "DATA",
    "형식": "HTML"
    
    
### 서울시 길 정보 (KOR)

> 예시 정보

    "PDF_FILE_PATH": "http://gil.seoul.go.kr/view/course/2014/06/27/2762534771938585.zip",
    "CPI_IDX": 115,
    "COURSE_NAME": "고덕산 산책길",
    "SOUTH_NORTH_DIV": "1",
    "DISTANCE": "1.90km",
    "COURSE_CATEGORY": 1000,
    "CPI_CONTENT": "명일역 3번 출입구\n",
    "SOUTH_NORTH_DIV_NM": "강남",
    "DETAIL_COURSE": "명일역 3번 출입구~고덕산 정상",
    "TRAFFIC_INFO": "진입로1 : 명일역 지하철 5호선 3번 출입구 <br />\r\n※교통편의 변경이 있을 수 있으니 출발전 확인 바랍니다.",
    "COURSE_LEVEL": "1",
    "RELATE_SUBWAY": "5호선",
    "REG_DATE": 1379922525000,
    "COURSE_CATEGORY_NM": "생태문화길",
    "CONTENT": null,
    "CPI_NAME": "명일역 3번 출입구",
    "LEAD_TIME": "1시간30분",
    "Y": "450271.8163",
    "X": "212740.8039",
    "VOTE_CNT": 0,
    "AREA_GU": "강동구"






