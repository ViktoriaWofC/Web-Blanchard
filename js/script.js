// const breakpoint = window.matchMedia( '(max-width:1600px)' );
// var swiperBooks;

// const enableSwiper = function() {
//   swiperBooks = new Swiper('.books-swiper-container', {
//     slidesPerView: 1,
//     slidesPerGroup: 1,
//     watchOverflow: true,
//     noSwiping: false,
//     //slidesPerColumn: 2,
//     //slidesPerColumnFill: 'row',
//     //spaceBetween: 50,
//     pagination: {
//       el: '.books-swiper-pagination',
//       type: 'fraction',
//     },
//     navigation: {
//       nextEl: '.books-swiper-button-next',
//       prevEl: '.books-swiper-button-prev',
//     },
//     breakpoints: {

//       // when window width is >= 1600px

//       768: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//       },
//       1600: {
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//       },


//     }
//   });
// };

window.addEventListener('DOMContentLoaded', function() {

  var swiperGallery = new Swiper('.gallery-swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    //slidesPerColumn: 2,
    //slidesPerColumnFill: 'row',
    spaceBetween: 50,
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
      1600: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 35
      }
    }
  });



  var swiperEvents = new Swiper('.swiper-container-events', {
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
    document.querySelector(".events-list").classList.remove("events-list-hidden");
    event.target.style.display  = 'none';
  });

  document.querySelector(".events-button-content").addEventListener("keypress", function(event) {
    if(event.keyCode == 13)
    {
      console.log(document.querySelector(".events-list"))
      document.querySelector(".events-list").classList.remove("events-list-hidden");
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





  // // breakpoint where swiper will be destroyed
  // // and switches to a dual-column layout
  //const breakpoint = window.matchMedia( '(max-width:1600px)' );
  // // keep track of swiper instances to destroy later


  // const breakpointChecker = function() {
  //   // if larger viewport and multi-row layout needed
  //   if ( breakpoint.matches === true ) {
  //       // clean up old instances and inline styles when available
  //       if ( swiperBooks !== undefined ) swiperBooks.destroy( true, true );
  //       // or/and do nothing
  //       return;
  //   // else if a small viewport and single column layout needed
  //   } else if ( breakpoint.matches === false ) {
  //       // fire small viewport version of swiper
  //       if ( swiperBooks === undefined )
  //       enableSwiper();

  //       return;
  //   }
  // };

  // enableSwiper();


  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // keep an eye on viewport size changes
  //breakpoint.addListener(breakpointChecker);


  CheckSwiperBooks(breakpointSwiperBooks.matches);



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

var swiperBooks;

function CreateSwiperBooks() {
  swiperBooks = new Swiper('.books-swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    watchOverflow: true,
    noSwiping: false,
    //slidesPerColumn: 2,
    //slidesPerColumnFill: 'row',
    //spaceBetween: 50,
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

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },


    }
  });
}

const breakpointSwiperBooks = window.matchMedia( '(max-width:760px)' );

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


window.addEventListener('resize', function() {
    // var elem = document.querySelector(".section-work-details");
    // var new_height = document.querySelector('[data-target="step1"]').offsetHeight;
    // if(new_height !== 0)
    // {
    //   elem.style.height = new_height+"px";
    // }

    CheckSwiperBooks(breakpointSwiperBooks.matches);

    //var elem = document.querySelector(".catalogue-content-nav");
    //var currentPeriodsBlockWidth = elem.offsetWidth;
    //console.log(currentPeriodsBlockWidth)
    //".periods-content-list"

    //var elem = document.querySelector(".periods-content-list");
    //console.log(elem.style.column)

 });
