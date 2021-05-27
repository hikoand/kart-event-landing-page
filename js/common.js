$(function () {
  // top btn

  $('.back_to_top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
      $('.back_to_top').removeClass('on');
    } else {
      $('.back_to_top').addClass('on');
    }
  });

  //scroll trigger animation

  let a = 0;
  $(window).scroll(function () {
    let oTop = $('.contents__c').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.contents__c').each(function () {
        $(this).addClass('on');
      });
    }
  });

  $(window).scroll(function () {
    let oTop = $('.banner__bubble').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.banner__bubble').each(function () {
        $(this).addClass('on');
      });
    }
  });

  //changing charactors position

  $(window).scroll(function () {
    let leftNum = $('.banner__character_3 ').offset().top;

    let moveTrue = 1 - window.scrollY / leftNum;
    let what = window.scrollY / leftNum;
    console.log(window.scrollY);
    console.log(leftNum);

    if (moveTrue < 1) {
      $('.banner__character_3').css({ right: moveTrue * 400 });
      $('.banner__character_2').css({ left: moveTrue * 400 });
    }
  });
});
