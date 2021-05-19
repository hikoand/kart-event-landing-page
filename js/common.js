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

  // character scroll move

  $('.move__c').each(function (i) {
    let = trans = '-';
    let leftDir = '+';
    let rightDir = '-';
    let thisElem = $(this);
    console.log(thisElem);

    $(window).scroll(function () {
      let thisOffset = thisElem.offset();

      if ($(window).scrollTop() > 840 && $(window).scrollTop() < 1380) {
        $('.banner__character_3').css({
          left: rightDir + '=25px',
        });

        let leftNum = $('.banner__character_3 ').offset().left;
        console.log(leftNum);

        if (leftNum < 1042) {
          console.log('stop');
        }
      }

      // else if ($(window).scrollTop() > 1380 && $(window).scrollTop() > 1920) {
      //   thisElem.css({
      //     left: leftDir + '=25px',
      //   });
      // } else if ($(window).scrollTop() > 839) {
      //   return;
      // }
    });
  });
});
