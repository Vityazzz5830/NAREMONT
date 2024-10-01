/*---------!!! МОДАЛКА ИНИЦИАЛИЗАЦИЯ !!!------------------*/

window.addEventListener('DOMContentLoaded', function () {
   MicroModal.init({
      openTrigger: 'data-custom-open',
      closeTrigger: 'data-micromodal-close',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
   });
});

var body1 = document.getElementsByTagName('body')[0];

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal_login').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal_login"); // тут указываем ID элемента
    var divt2 = $(".modal_login"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal_login2').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal_login2"); // тут указываем ID элемента
    var divt2 = $(".modal_login2"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal_login3').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal_login3"); // тут указываем ID элемента
    var divt2 = $(".modal_login3"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal_login4').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal_login4"); // тут указываем ID элемента
    var divt2 = $(".modal_login4"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal_login5').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal_login5"); // тут указываем ID элемента
    var divt2 = $(".modal_login5"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});


const btnclose = document.querySelector("#close_modal");
const order = document.querySelector("#modal_login");
var body1 = document.getElementsByTagName('body')[0];

btnclose.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal_login');
    order.classList.toggle("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
});

const btnclose2 = document.querySelector("#close_modal2");
const order2 = document.querySelector("#modal_login2");
var body2 = document.getElementsByTagName('body')[0];

btnclose2.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal_login2');
    order2.classList.toggle("is-open");
    body2.setAttribute('style', 'overflow-y: scroll');
});

const btnclose3 = document.querySelector("#close_modal3");
const order3 = document.querySelector("#modal_login3");
var body3 = document.getElementsByTagName('body')[0];

btnclose3.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal_login3');
    order3.classList.toggle("is-open");
    body3.setAttribute('style', 'overflow-y: scroll');
});

const btnclose4 = document.querySelector("#close_modal4");
const order4 = document.querySelector("#modal_login4");
var body4 = document.getElementsByTagName('body')[0];

btnclose4.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal_login4');
    order4.classList.toggle("is-open");
    body4.setAttribute('style', 'overflow-y: scroll');
});

const btnclose5 = document.querySelector("#close_modal5");
const order5 = document.querySelector("#modal_login5");
var body5 = document.getElementsByTagName('body')[0];

btnclose5.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal_login5');
    order5.classList.toggle("is-open");
    body5.setAttribute('style', 'overflow-y: scroll');
});


const input = document.querySelector(".placeholder");
let btnsubmit = document.querySelector('#container_modal_login_form2_btn');
btnsubmit.setAttribute("disabled", "true");

input.addEventListener("keydown", (e) => {
    const condition = e.target.value.length < 5 ? "Неправильный код. Попробуйте еще раз" : "Введите код из СМС ";
    input.placeholder = condition;
    console.log(e.target.value.length+1);
    if(e.target.value.length+1 < 6){
      btnsubmit.setAttribute("disabled", "true");
      console.log(input);
      input.style.background = "#FFB2B2";
      input.placeholder = condition;
      input.placeholder = 'Неправильный код. Попробуйте еще раз';
      
    }
    else
    {
      btnsubmit.setAttribute("disabled", "false");
      input.style.background = "#F1F1F1";
      input.placeholder = condition;
    }
})

input.addEventListener("click", function() {
  input.value = "";
});





const input2 = document.querySelector(".placeholder2");
let btnsubmit2 = document.querySelector('#container_modal_login_form4_btn');
btnsubmit2.setAttribute("disabled", "true");

input2.addEventListener("keydown", (e) => {
    const condition = e.target.value.length < 5 ? "Неправильный код. Попробуйте еще раз" : "Введите код из СМС ";
    input2.placeholder = condition;
    console.log(e.target.value.length+1);
    if(e.target.value.length+1 < 2){
      btnsubmit2.setAttribute("disabled", "true");
      console.log(input2);
      input2.style.background = "#FFB2B2";
      input2.placeholder = condition;
      input2.placeholder = 'Такого пользователя не существует';
      
    }
    else
    {
      btnsubmit2.setAttribute("disabled", "false");
      input2.style.background = "#F1F1F1";
      input2.placeholder = condition;
    }
})

input2.addEventListener("click", function() {
  input2.value = "";
});


const input3 = document.querySelector(".placeholder3");
let btnsubmit3 = document.querySelector('#container_modal_login_form5_btn');
btnsubmit2.setAttribute("disabled", "true");

input3.addEventListener("keydown", (e) => {
    const condition = e.target.value.length < 5 ? "Неправильный код. Попробуйте еще раз" : "Введите код из СМС ";
    input3.placeholder = condition;
    console.log(e.target.value.length+1);
    if(e.target.value.length+1 < 2){
      btnsubmit3.setAttribute("disabled", "true");
      console.log(input3);
      input3.style.background = "#FFB2B2";
      input3.placeholder = condition;
      input3.placeholder = 'Неправильный пароль';
      
    }
    else
    {
      btnsubmit3.setAttribute("disabled", "false");
      input3.style.background = "#F1F1F1";
      input3.placeholder = condition;
    }
})

input3.addEventListener("click", function() {
  input3.value = "";
});





















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