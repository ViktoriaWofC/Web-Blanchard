window.addEventListener('DOMContentLoaded', function() {

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
         1600: {
          slidesPerView: 5,
           //noSwiping: true
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






  // document.querySelector("#agreeCheckbox").addEventListener("change", function(event) {
  //   var checkbox = event.target;
  //   var label = document.querySelector("#agreeLabel");
  //   if(checkbox.checked){
  //     //checkbox.checked=false;
  //     label.setAttribute("aria-checked", true);
  //     //console.log(label.getAttribute("aria-checked"));
  //   }
  //   else {
  //     //checkbox.checked=true;
  //     label.setAttribute("aria-checked", false);
  //     //console.log(label.getAttribute("aria-checked"));
  //   }

  // });



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
