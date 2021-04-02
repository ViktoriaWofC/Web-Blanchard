window.addEventListener('DOMContentLoaded', function() {

  var swiper = new Swiper('.gallery-swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    //slidesPerColumn: 2,
    //slidesPerColumnFill: 'row',
    //spaceBetween: 40,
    watchOverflow: true,
    pagination: {
      el: '.gallery-swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.gallery-swiper-button-next',
      prevEl: '.gallery-swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 1600px
      1025: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2
      }
    }
  });



  var swiper = new Swiper('.swiper-container-events', {
    slidesPerView: 1,
    //slidesPerColumn: 2,
    //slidesPerColumnFill: 'row',
    //spaceBetween: 30,
    watchOverflow: true,
    noSwiping: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 1600px
        320: {
        slidesPerView: 5,
        noSwiping: true
          //slidesPerView: 2,
          //slidesPerColumn: 3,
        }
    }
  });






  // document.querySelectorAll(".nav-work-item-link").forEach(function(elem) {
  //   elem.addEventListener("click", function(event){
  //     ChangeTabAction(event);
  //   })
  //   elem.addEventListener("keypress", function(event){
  //     if(event.keyCode == 13) {
  //       ChangeTabAction(event);
  //     }
  //   })
  // });

  // function ChangeTabAction(event) {
  //   const path = event.currentTarget.dataset.path;

  //     //add tab style
  //     document.querySelectorAll(".nav-work-item-link").forEach(function(el){
  //       el.classList.remove("nav-work-item-selected");
  //     });
  //     event.target.classList.add("nav-work-item-selected");

  //     //add visible
  //     document.querySelectorAll(".work-item").forEach(function(el){
  //       el.classList.remove("work-item-active");
  //     });
  //     document.querySelector(`[data-target="${path}"]`).classList.add("work-item-active");
  // };

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


  document.querySelector(".events-button").addEventListener("click", function(event) {
    document.querySelector(".events-list").classList.toggle("events-list-hidden");
    event.target.style.display  = 'none';
  });

  document.querySelector(".events-button").addEventListener("keypress", function(event) {
    if(event.keyCode == 13)
    {
      document.querySelector(".events-list").classList.toggle("events-list-hidden");
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


  var swiperPertners = new Swiper('.swiper-container-partners', {
    slidesPerView: 1,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 1600px
      320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      },

      1600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
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


  // document.querySelectorAll(".ui-accordion-content").forEach(function(el){
  //   el.classList.remove("ui-accordion-content-active");
  // });

  // document.querySelector(".header-menu-icon").addEventListener("click", function(event) {
  //   document.querySelector(".header-menu-panel").classList.toggle("header-menu-active");
  //   document.querySelector(".header-menu-list").classList.toggle("header-menu-list-active");
  // });

  // document.querySelector(".header-menu-icon").addEventListener("keypress", function(event) {
  //   if(event.keyCode == 13)
  //   {
  //     document.querySelector(".header-menu-panel").classList.toggle("header-menu-active");
  //     document.querySelector(".header-menu-list").classList.toggle("header-menu-list-active");
  //   }
  // });

  // document.querySelectorAll(".header-menu-item-link").forEach(function(elem) {
  //   elem.target.addEventListener("click", function(event) {
  //     document.querySelector(".header-menu-panel").classList.toggle("header-menu-active");
  //     document.querySelector(".header-menu-list").classList.toggle("header-menu-list-active");
  //   })
  // });
});

//window.addEventListener('resize', function() {
    // var elem = document.querySelector(".section-work-details");
    // var new_height = document.querySelector('[data-target="step1"]').offsetHeight;
    // if(new_height !== 0)
    // {
    //   elem.style.height = new_height+"px";
    // }



    //var elem = document.querySelector(".catalogue-content-nav");
    //var currentPeriodsBlockWidth = elem.offsetWidth;
    //console.log(currentPeriodsBlockWidth)
    //".periods-content-list"

    //var elem = document.querySelector(".periods-content-list");
    //console.log(elem.style.column)

 //});
