window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});


/*---------!!! СЛАЙДЕРЫ ИНИЦИАЛИЗАЦИЯ !!!------------------*/

$('.firstsec_content_uppart_list_item_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ],
    prevArrow: $('.firstsec_content_uppart_list_item_slider_arrows_leftbtn'),
    nextArrow: $('.firstsec_content_uppart_list_item_slider_arrows_rightbtn')
});

$('.firstsec_content_centrepart_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: true,
    dots: true,
    autoplay: false,
    variableWidth: true
});

$('.reviewssec_content_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: false,
    autoplay: false,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
    prevArrow: $('.reviewssec_content_slider_buttons_leftpart'),
    nextArrow: $('.reviewssec_content_slider_buttons_rightpart')
});

$('.artsec_content_list_mainprogrampage').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: false,
    autoplay: false,
    variableWidth: true,
    prevArrow: $('.artsec_content_list_mainprogrampage_buttons_btnleft'),
    nextArrow: $('.artsec_content_list_mainprogrampage_buttons_btnright')
});



 $(document).ready(function(){
        var $slider = $('.artsec_content_list_mainprogrampage');

        $('#totalSlides').text($slider.slick("getSlick").slideCount);

        $slider.on('init', function(event, slick){
            $('#totalSlides').text(slick.slideCount);
            $('#currentSlide').text(slick.currentSlide + 1);
        });

        $slider.on('afterChange', function(event, slick, currentSlide){
            $('#currentSlide').text(currentSlide + 1);
        });

        
    });




/*--------------BURGER MENU-----------------------*/
/*
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const close_popup = document.querySelector("#close_popup");
const sec = document.getElementsByTagName("section");

console.log(sec);

const body = document.body;
let listitembtn = document.getElementsByClassName('header_content-wrap-navmenu-list-item');

hamb.addEventListener("click", hambHandler);
close_popup.addEventListener("click", hambHandler);


function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}

for (let n = 0; n < listitembtn.length; n++) {
  listitembtn[n].addEventListener('click', function() {
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}
*/














window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


var emailInputs = document.querySelectorAll('input[data-email-input]');

$(emailInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^aA-zZ1234567890@.?!%&()><*-_]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});



/*-------------ТАБ-МЕНЮ УСЛУГИ-------------*/

let p_bold = document.getElementsByClassName('questions-list-item-title-p');
let listitem = document.getElementsByClassName('questions-list-item');
let wrapinfo = document.getElementsByClassName('questions-list-item-wrapinfo');
let itemimage = document.getElementsByClassName('questions-list-item-title_image');

let imgnoac = document.getElementsByClassName('plus');

for (let i = 0; i < listitem.length; i++) {
  listitem[i].addEventListener('click', function() {
    
    wrapinfo[i].classList.toggle("questions-list-item-wrapinfo_js");

    p_bold[i].classList.toggle("questions-list-item-title-p_js");


    imgnoac[i].classList.toggle("plus_act");
    

  });
}




/*-------------ТАБ-МЕНЮ УСЛУГИ-------------*/

let block = document.getElementsByClassName('aboutussec_content_item_downpart');
let but = document.getElementsByClassName('aboutussec_content_item_mobile');


for (let i = 0; i < but.length; i++) {
  but[0].addEventListener('click', function() {
    
    block[0].classList.toggle("aboutussec_content_item_downpart_mobilefix");
  });
}