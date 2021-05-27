# Kart event landing page

## 🔎주요로직

- CSS animation을 이용하여 요소의 역동적인 움직임 구현
  - 반복되는 요소는 SCSS mixin을 통해 선택자와 속성 재활용

 ```css
 @mixin float__baloon($top, $left) {
  width: 198px;
  height: 229px;
  top: $top;
  left: $left;
  animation: floatAni1 4.5s ease-in-out infinite;
}

@mixin move__Ani($name, $duration, $delay) {
  -webkit-animation-duration: $duration;
  animation-duration: $duration;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: $name;
  animation-name: $name;
  -webkit-animation-delay: $delay;
  animation-delay: $delay;
}
 ```
 
 - Scroll 위치를 trigger로 제어하고싶은 요소 높이에서 animation 실행
 
 ```javascript
 
 // 1. 1번만 실행하기 위해 변수 설정
   let a = 0;
  $(window).scroll(function () {
  // 2. 요소의 top 값 - 윈도우 내부 높이
    let oTop = $('.contents__c').offset().top - window.innerHeight;
    // 3. 2에서 받은 값(oTop)을 세로 스크롤 값과 비교
      // oTop이 스크롤값이 넘을 경우 애니메이션 실행 
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.contents__c').each(function () {
        $(this).addClass('on');
      });
    }
  });
 ```
 - Scroll 위치를 trigger 요소의 포지션 제어
  
 ```javascript
 
  $(window).scroll(function () {
  //1. 요소의 offset().top 값을 받아 변수 설정
    let leftNum = $('.banner__character_3 ').offset().top;

     //3. scroll값 / 요소의 top값
    // 요소까지 도달하기 까지의 scroll 값의 비율을 0 ~ 1 까지 받아옴 ( 100분율 )
    let moveTrue = 1 - window.scrollY / leftNum;
    let what = window.scrollY / leftNum;
      
   //4. 받아온 값으로 조건을 걸어 이동시킬 거리에 곱하여 css를 제어한다.
   //moveTrue는 0 ~ 1 까지의 수가 되어 정해둔 구간을 지나 1이 넘어가게 되었을 때
   //이동을 멈추게 하기위해 if (moveTrue < 1)을 걸어 준다.
    if (moveTrue < 1) {
      $('.banner__character_3').css({ right: moveTrue * 400 });
      $('.banner__character_2').css({ left: moveTrue * 400 });
    }
  });
 
 ```
