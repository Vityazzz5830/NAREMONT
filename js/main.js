
/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const hamb2 = document.querySelector("#hamb2");
const popup = document.querySelector("#popup");
const close_popup = document.querySelector("#close_popup");
const sec = document.getElementsByTagName("section");

console.log(sec);

const body = document.body;
let listitembtn = document.getElementsByClassName('header_content-wrap-navmenu-list-item');

hamb.addEventListener("click", hambHandler);
hamb2.addEventListener("click", hambHandler);
close_popup.addEventListener("click", hambHandler);


function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}

function hambHandler2(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb2.classList.toggle("active");
  body.classList.toggle("noscroll");
}

for (let n = 0; n < listitembtn.length; n++) {
  listitembtn[n].addEventListener('click', function() {
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}








var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
  if (e.target.classList.contains('active')) return;
  
  featured.style.backgroundImage = e.target.style.backgroundImage;
  
  for (var i = 0; i < galleryItems.length; i++) {
    if (galleryItems[i].classList.contains('active'))
      galleryItems[i].classList.remove('active');
  }
  
  e.target.classList.add('active');
}

function galleryWrapLeft() {
  /*
  var first = gallery.children[0];
  gallery.removeChild(first);
  gallery.style.left = -itemWidth + '%';
  gallery.appendChild(first);
  gallery.style.left = '0%'; */
}

function galleryWrapRight() {
  var last = gallery.children[gallery.children.length - 1];
  gallery.removeChild(last);
  gallery.insertBefore(last, gallery.children[0]);
  gallery.style.left = '-23%';
}

function moveLeft() {
  left = left || 0;

  leftInterval = setInterval(function() {
    gallery.style.left = left + '%';

    if (left > -itemWidth) {
      left -= scrollRate;
    } else {
      left = 0;
      galleryWrapLeft();
    }
  }, 1);
}

function moveRight() {
  //Make sure there is element to the leftd
  if (left > -itemWidth && left < 0) {
    left = left  - itemWidth;
    
    var last = gallery.children[gallery.children.length - 1];
    gallery.removeChild(last);
    gallery.style.left = left + '%';
    gallery.insertBefore(last, gallery.children[0]);  
  }
  
  left = left || 0;

  leftInterval = setInterval(function() {
    gallery.style.left = left + '%';

    if (left < 0) {
      left += scrollRate;
    } else {
      left = -itemWidth;
      galleryWrapRight();
    }
  }, 1);
}

function stopMovement() {
  clearInterval(leftInterval);
  clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveLeft);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveRight);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
  var images = [
    'img/franchaizisec_content_main_slider_item_1.png',
    'img/franchaizisec_content_main_slider_item_2.png',
    'img/franchaizisec_content_main_slider_item_3.png',
    'img/franchaizisec_content_main_slider_item_4.png',
    'img/franchaizisec_content_main_slider_item_5.png',
    'img/franchaizisec_content_main_slider_item_6.png',
    'img/franchaizisec_content_main_slider_item_7.png',
    'img/franchaizisec_content_main_slider_item_8.png',
    'img/franchaizisec_content_main_slider_item_9.png',
    'img/franchaizisec_content_main_slider_item_10.png'
  ];
  
  //Set Initial Featured Image
  featured.style.backgroundImage = 'url(' + images[0] + ')';
  
  //Set Images for Gallery and Add Event Listeners
  for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
    galleryItems[i].addEventListener('click', selectItem);
  }
})();


const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");

tab1.addEventListener('click', function() {
     tab1.classList.add("tab_active");
     tab2.classList.remove("tab_active");
  });

tab2.addEventListener('click', function() {
     tab2.classList.add("tab_active");
     tab1.classList.remove("tab_active");
  });


window.addEventListener('scroll', function() {
            // Высота документа
            const docHeight = document.documentElement.scrollHeight;
            // Высота видимой части окна
            const windowHeight = window.innerHeight;
            // Пройденное расстояние при прокрутке
            const scrollTop = window.scrollY;

            // Проверяем, если прокрутка превышает 10% от полной высоты страницы
            if (scrollTop > docHeight * 0.05) {
                document.querySelector('.header_wrap').classList.add('visible');
            } else {
                document.querySelector('.header_wrap').classList.remove('visible');
            }
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