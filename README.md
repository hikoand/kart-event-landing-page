# Kart event landing page

## πμ£Όμλ‘μ§

- CSS animationμ μ΄μ©νμ¬ μμμ μ­λμ μΈ μμ§μ κ΅¬ν
  - λ°λ³΅λλ μμλ SCSS mixinμ ν΅ν΄ μ νμμ μμ± μ¬νμ©

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
 
 - Scroll μμΉλ₯Ό triggerλ‘ μ μ΄νκ³ μΆμ μμ λμ΄μμ animation μ€ν
 
 ```javascript
 
 // 1. 1λ²λ§ μ€ννκΈ° μν΄ λ³μ μ€μ 
   let a = 0;
  $(window).scroll(function () {
  // 2. μμμ top κ° - μλμ° λ΄λΆ λμ΄
    let oTop = $('.contents__c').offset().top - window.innerHeight;
    // 3. 2μμ λ°μ κ°(oTop)μ μΈλ‘ μ€ν¬λ‘€ κ°κ³Ό λΉκ΅
      // oTopμ΄ μ€ν¬λ‘€κ°μ΄ λμ κ²½μ° μ λλ©μ΄μ μ€ν 
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.contents__c').each(function () {
        $(this).addClass('on');
      });
    }
  });
 ```
 - Scroll μμΉλ₯Ό trigger μμμ ν¬μ§μ μ μ΄
  
 ```javascript
 
  $(window).scroll(function () {
  //1. μμμ offset().top κ°μ λ°μ λ³μ μ€μ 
    let leftNum = $('.banner__character_3 ').offset().top;

     //3. scrollκ° / μμμ topκ°
    // μμκΉμ§ λλ¬νκΈ° κΉμ§μ scroll κ°μ λΉμ¨μ 0 ~ 1 κΉμ§ λ°μμ΄ ( 100λΆμ¨ )
    let moveTrue = 1 - window.scrollY / leftNum;
    let what = window.scrollY / leftNum;
      
   //4. λ°μμ¨ κ°μΌλ‘ μ‘°κ±΄μ κ±Έμ΄ μ΄λμν¬ κ±°λ¦¬μ κ³±νμ¬ cssλ₯Ό μ μ΄νλ€.
   //moveTrueλ 0 ~ 1 κΉμ§μ μκ° λμ΄ μ ν΄λ κ΅¬κ°μ μ§λ 1μ΄ λμ΄κ°κ² λμμ λ
   //μ΄λμ λ©μΆκ² νκΈ°μν΄ if (moveTrue < 1)μ κ±Έμ΄ μ€λ€.
    if (moveTrue < 1) {
      $('.banner__character_3').css({ right: moveTrue * 400 });
      $('.banner__character_2').css({ left: moveTrue * 400 });
    }
  });
 
 ```

 - SCSS λ°λ³΅λ¬Έμ μ΄μ©ν snowdrop ν¨κ³Ό
 ```scss
    // 1. 1 ~ μμκ°―μκΉμ§ λ°λ³΅ν΄μ μ€ν
    @for $i from 1 through $SNOWDROPS_LENGTH {
    // 2. random()μΌλ‘ 0 ~ κΈ°μ€μΌλ‘ μ§μ ν μ¬μ΄μ¦κΉμ§ λ°μμ μ¬μ΄μ¦λ₯Ό μΆλ ₯ν λ€ abs()μΌλ‘ μ λκ° μ·¨λ
    $size: abs(random($snow-size-base) - random($snow-size-base)) + 10px;

    // 3. κ°μμ νμμ μΈν°ν΄λ μ΄μμ μ¬μ©νμ¬ μμΉ,λλΉ,λμ΄,μ λλ©μ΄μ μμ±μ κ°κ° μ μ΄
    &:nth-child(#{$i}) {
      left: abs(random($left-position) - random($left-position)) + 0%;
      width: $size;
      height: $size * 2;
      animation-duration: abs(
          random($animate-speed-base) - random($animate-speed-base)
        ) +
        $minimum-falling-speed +
        0ms;
      animation-delay: abs(random($animate-delay-base)) + 0ms;
      transform: rotate(45deg);
    }
  }
}
  ```
