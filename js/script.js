window.addEventListener('DOMContentLoaded', function() {

  var swiperGallery = new Swiper('.gallery-swiper-container', {
    slidesPerView: 1,
    //slidesPerGroup: 1,
    slidesPerColumn: 1,
    //slidesPerColumn: 2,
    //slidesPerColumnFill: 'row',
    //spaceBetween: 50,
    //watchOverflow: true,
    pagination: {
      el: '.gallery-swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.gallery-swiper-button-next',
      prevEl: '.gallery-swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 1
      },
      400: {
        slidesPerView: 1,
        slidesPerColumn: 2,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      // 500: {
      //   slidesPerView: 1,
      //   slidesPerColumn: 2,
      //   slidesPerGroup: 1,
      //   spaceBetween: 30
      // },
      760: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 35
      },
      1601: {
        // when window width is >= 1600px
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }

    }
  });


  document.querySelector(".section-hero-button").addEventListener('click', function(event){
    var element = document.getElementById("contacts");
    element.scrollIntoView({behavior: "smooth"});
  });

  document.querySelector(".section-hero-button").addEventListener('keypress', function(event){
    if(event.keyCode == 13) {
      var element = document.getElementById("contacts");
      element.scrollIntoView({behavior: "smooth"});
    }
  });



  document.querySelectorAll(".country-list-item-link").forEach(function(elem) {
    elem.addEventListener("click", function(event){
      ChangeCountyTabAction(event);
    })
    elem.addEventListener("keypress", function(event){
      if(event.keyCode == 13) {
        ChangeCountyTabAction(event);
      }
    })
  });

  function ChangeCountyTabAction(event) {
    const path = event.currentTarget.dataset.path;

      //add tab style
      document.querySelectorAll(".country-list-item-link").forEach(function(el){
        el.classList.remove("country-list-item-selected");
      });
      event.currentTarget.classList.add("country-list-item-selected");
  };

  document.querySelectorAll(".periods-content-list-link").forEach(function(elem) {
    elem.addEventListener("click", function(event){
      ChangePeriodsTabAction(event);
    })
    elem.addEventListener("keypress", function(event){
      if(event.keyCode == 13) {
        ChangePeriodsTabAction(event);
      }
    })
  });

  function ChangePeriodsTabAction(event) {
    const path = event.currentTarget.dataset.path;

      //add tab style
      document.querySelectorAll(".periods-content-list-link").forEach(function(el){
        el.classList.remove("periods-content-list-link-selected");
      });
      event.currentTarget.classList.add("periods-content-list-link-selected");

      //add visible
      document.querySelectorAll(".catalogue-content-info-card").forEach(function(el){
        el.classList.remove("catalogue-card-active");
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("catalogue-card-active");
  };

  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });

    $( "#accordion" ).accordion({
      active: false
    });

    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
  } );


  document.querySelector(".periods-link").click();


  document.querySelector(".events-button-content").addEventListener("click", function(event) {
    document.querySelector(".events-content").classList.remove("events-content-hidden");
    event.target.style.display  = 'none';
  });

  document.querySelector(".events-button-content").addEventListener("keypress", function(event) {
    if(event.keyCode == 13)
    {
      document.querySelector(".events-content").classList.remove("events-content-hidden");
      event.target.style.display  = 'none';
    }
  });


  document.querySelectorAll(".category-checkbox").forEach(function(el){
    el.addEventListener("change", function(event) {
      var checkbox = event.target;
      var label = checkbox.parentElement;
      if(checkbox.checked){
        label.setAttribute("aria-checked", true);
      }
      else {
        label.setAttribute("aria-checked", false);
      }
    });
  });

  document.querySelectorAll(".price-content-input").forEach(function(el){
    el.addEventListener("blur", function(event) {
      event.currentTarget.value = event.currentTarget.value.replace(/[^\d]/g, '').replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
    });

    el.addEventListener("focus", function(event) {
      event.currentTarget.value = event.currentTarget.value.replace(/\s/g, '');
    });
  });

  CheckSwiperEvents(breakpointSwiperEvents.matches);


  CheckSwiperBooks(breakpointSwiperBooks.matches);



  var swiperPertners = new Swiper('.swiper-container-partners', {
    slidesPerView: 1,
    spaceBetween: 50,
    //slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 1600px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      760: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 33,
      },
      1000: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 49,
      },
      1600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    }
  });


  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.763463,37.611079],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 14,
          controls: ['geolocationControl', 'zoomControl']
      });

      myMap.controls.get('zoomControl').options.set('size', 'small');

      var myPlacemark = new ymaps.Placemark([55.758463,37.601079], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/img/map_point.png',
        iconImageSize: [20, 20]
      });
      myMap.geoObjects.add(myPlacemark);
  }




  document.querySelectorAll(".styles-item-link").forEach(function(elem) {
    elem.addEventListener("click", function(event){
      ChangeScrollbarStateAction(event);
    })
    elem.addEventListener("keypress", function(event){
      if(event.keyCode == 13) {
        ChangeScrollbarStateAction(event);
      }
    })
    elem.addEventListener("blur", function(event){
      event.currentTarget.classList.remove("styles-item-link-selected");
      document.querySelectorAll(".styles-item-content").forEach(function(el){
        el.classList.remove("styles-item-content-active");
      });
    })
  });

  function ChangeScrollbarStateAction(event) {
    const path = event.currentTarget.dataset.path;

    if(event.currentTarget.classList.contains('styles-item-link-selected')) {
      event.currentTarget.classList.remove("styles-item-link-selected");
      document.querySelector(`.styles-item-content[data-target="${path}"]`).classList.remove("styles-item-content-active");
    }
    else {
      //add tab style
      document.querySelectorAll(".styles-item-link").forEach(function(el){
        el.classList.remove("styles-item-link-selected");
      });
      event.currentTarget.classList.add("styles-item-link-selected");

      //add visible
      document.querySelectorAll(".styles-item-content").forEach(function(el){
        el.classList.remove("styles-item-content-active");
      });
      document.querySelector(`.styles-item-content[data-target="${path}"]`).classList.add("styles-item-content-active");
    }
  };


  document.querySelector(".header-menu-icon").addEventListener("click", function(event) {
    document.querySelector(".header-menu-panel").classList.toggle("header-menu-panel-active");
  });

  document.querySelector(".header-menu-icon").addEventListener("keypress", function(event) {
    if(event.keyCode == 13)
    {
      document.querySelector(".header-menu-panel").classList.toggle("header-menu-panel-active");
    }
  });

  document.querySelectorAll(".menu-panel-list-item-link").forEach(function(elem) {
    elem.addEventListener("click", function(event) {
      document.querySelector(".header-menu-panel").classList.toggle("header-menu-panel-active");
    })
  });

  document.querySelectorAll(".category-checkbox").forEach(function(elem) {
    elem.addEventListener("change", function(event) {
      var checkbox = event.target;
      var label = event.currentTarget.parentElement;
      if(checkbox.checked){
        label.setAttribute("aria-checked", true);
      }
      else {
        label.setAttribute("aria-checked", false);
      }
    });
  });

  document.querySelectorAll(".category-label").forEach(function(elem) {
    elem.addEventListener("keypress", function(event) {
      if(event.keyCode == 13)
      {
        var checkbox = event.currentTarget.querySelector("input");
        var label = event.currentTarget;
        if(label.getAttribute("aria-checked")){
          checkbox.checked = false;
          label.setAttribute("aria-checked", false);
        }
        else {
          checkbox.checked = true;
          label.setAttribute("aria-checked", true);
        }
      }
    });
  });


  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  var validate = new JustValidate('.contacts-details-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10
        }
      }
    },
    messages: {
      name: 'Как вас зовут?',
      tel: 'Укажите ваш телефон'
    }
  });





});

var swiperBooks;

function CreateSwiperBooks() {
  swiperBooks = new Swiper('.books-swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 9,
    watchOverflow: true,
    pagination: {
      el: '.books-swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.books-swiper-button-next',
      prevEl: '.books-swiper-button-prev',
    },
    breakpoints: {

      // when window width is >= 1600px

      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      921: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 44
      },
      1600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 45
      },


    }
  });
}

const breakpointSwiperBooks = window.matchMedia( '(max-width:600px)' );

function CheckSwiperBooks(isOff) {
  if(isOff === true) {
    if(swiperBooks !== undefined && swiperBooks.destroyed === undefined)
    {
      swiperBooks.destroy(true, true);
      console.log('Destroy SwiperBooks');
    }
  } else {
    if(swiperBooks === undefined || swiperBooks.destroyed === true)
    {
      CreateSwiperBooks();
      console.log('Create SwiperBooks');
    }
  }
};


var swiperEvents;

function CreateSwiperEvents() {
  swiperEvents = new Swiper('.swiper-container-events', {
    slidesPerView: 1,
    watchOverflow: true,
    noSwiping: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
}

const breakpointSwiperEvents = window.matchMedia( '(max-width:320px)' );

function CheckSwiperEvents(isOn) {
  if(isOn === true) {
    if(swiperEvents === undefined || swiperEvents.destroyed === true)
    {
      CreateSwiperEvents();
      console.log('Create SwiperEvents');
    }
  } else {
    if(swiperEvents !== undefined && swiperEvents.destroyed === undefined)
    {
      swiperEvents.destroy(true, true);
      console.log('Destroy SwiperEvents');
    }
  }
};

window.addEventListener('resize', function() {
    CheckSwiperBooks(breakpointSwiperBooks.matches);
    CheckSwiperEvents(breakpointSwiperEvents.matches);
 });
