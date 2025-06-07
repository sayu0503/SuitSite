
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(function () {
    // ハンバーガーメニュー
    $(".js-hamburger,.js-drawer").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer").fadeToggle();
    });
  
    const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  });
  
  //一定の高さでヘッダーの色変更
  $(function () {
    $(window).on('scroll', function () {
        if ($('.mv').height() < $(this).scrollTop()) {
            $('.js-header').addClass('change-color');
      } else {
            $('.js-header').removeClass('change-color');
      }
    });
  });
  
  $(function () {
    const tabButton = $(".js-tab-button"),
      tabContent = $(".js-tab-content");
    tabButton.on("click", function () {
      let index = tabButton.index(this);
  
      tabButton.removeClass("is-active");
      $(this).addClass("is-active");
      tabContent.removeClass("is-active");
      tabContent.eq(index).addClass("is-active");
    });
  });
  
  $(function () {
    const open = $(".js-modal-open"),
      close = $(".js-modal__close"),
      modal = $(".js-modal");
  
    //開くボタンをクリックしたらモーダルを表示する
    open.on("click", function () {
      modal.addClass("is-open");
    });
  
    //閉じるボタンをクリックしたらモーダルを閉じる
    close.add(modal).on("click", function () {
      modal.removeClass("is-open");
    });
  });

});
