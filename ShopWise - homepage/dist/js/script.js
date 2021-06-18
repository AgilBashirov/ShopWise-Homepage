$(document).ready(function()
{
"use strict";

var menuActive = false;
var header = $('.header');
setHeader();
initCustomDropdown();
initPageMenu();

function setHeader()
{

if(window.innerWidth > 991 && menuActive)
{
closeMenu();
}
}

function initCustomDropdown()
{
if($('.custom_dropdown_placeholder').length && $('.custom_list').length)
{
var placeholder = $('.custom_dropdown_placeholder');
var list = $('.custom_list');
}

placeholder.on('click', function (ev)
{
if(list.hasClass('active'))
{
list.removeClass('active');
}
else
{
list.addClass('active');
}

$(document).one('click', function closeForm(e)
{
if($(e.target).hasClass('clc'))
{
$(document).one('click', closeForm);
}
else
{
list.removeClass('active');
}
});

});

$('.custom_list a').on('click', function (ev)
{
ev.preventDefault();
var index = $(this).parent().index();

placeholder.text( $(this).text() ).css('opacity', '1');

if(list.hasClass('active'))
{
list.removeClass('active');
}
else
{
list.addClass('active');
}
});


$('select').on('change', function (e)
{
placeholder.text(this.value);

$(this).animate({width: placeholder.width() + 'px' });
});
}

/*

4. Init Page Menu

*/

function initPageMenu()
{
if($('.page_menu').length && $('.page_menu_content').length)
{
var menu = $('.page_menu');
var menuContent = $('.page_menu_content');
var menuTrigger = $('.menu_trigger');

//Open / close page menu
menuTrigger.on('click', function()
{
if(!menuActive)
{
openMenu();
}
else
{
closeMenu();
}
});

//Handle page menu
if($('.page_menu_item').length)
{
var items = $('.page_menu_item');
items.each(function()
{
var item = $(this);
if(item.hasClass("has-children"))
{
item.on('click', function(evt)
{
evt.preventDefault();
evt.stopPropagation();
var subItem = item.find('> ul');
if(subItem.hasClass('active'))
{
subItem.toggleClass('active');
TweenMax.to(subItem, 0.3, {height:0});
}
else
{
subItem.toggleClass('active');
TweenMax.set(subItem, {height:"auto"});
TweenMax.from(subItem, 0.3, {height:0});
}
});
}
});
}
}
}

function openMenu()
{
var menu = $('.page_menu');
var menuContent = $('.page_menu_content');
TweenMax.set(menuContent, {height:"auto"});
TweenMax.from(menuContent, 0.3, {height:0});
menuActive = true;
}

function closeMenu()
{
var menu = $('.page_menu');
var menuContent = $('.page_menu_content');
TweenMax.to(menuContent, 0.3, {height:0});
menuActive = false;
}




});



$(document).ready(function(){
    // let myCarousel = document.querySelector('#carouselExampleControls')
    // let carousel = new bootstrap.Carousel(myCarousel, {
    // interval: 2000,
    // wrap: false
    // });



    $(".menu_burger_inner").click(function(){
        $(this).toggleClass("open");
        
      });
   

      

    $(window).scroll(function() {
        if($("#isOpen").hasClass("open") != true){
            if ($(document).scrollTop() >= 60) {
                $(".fixed-nav").css({"position":"fixed", "z-index": "1000", "background-color":"#fff", "opacity":"0.9"});
                if($(window).width() < 992){
                    $(".header_search").addClass( "d-none" );
                }
                $(".top_bar").addClass( "d-none" );
                $(".main_nav").addClass( "d-none" );
                $(".page_menu").addClass( "d-none" );
                $(".header_main").css({"padding-bottom":"15px"});


            
            } else {
                $(".fixed-nav").css({"position":"relative", "z-index": "1", "background-color":"#fff", "opacity":"1"});
                if($(window).width() < 992){
                    $(".header_search").removeClass( "d-none" );
                }
                $(".top_bar").removeClass( "d-none" );
                $(".main_nav").removeClass( "d-none" );
                $(".page_menu").removeClass( "d-none" );
                $(".header_main").css({"padding-bottom":"0"});

          
            }
          };

        
      });


    //  Do something with Carousel
      $('#carouselExampleControls').on('slide.bs.carousel', function () {
        // do something…
      })
      

    

});


$(document).ready(function() {
    $('.cards-links ul li').click(function() {
      // store anything commonly called in variables to speed up your code
      const $this = $(this);
      const $link = $this.children();
      $('.cards-links .nav-link').removeClass('active');
      $link.addClass('active');
      const linkItem = $this.data("filter");


      console.log(linkItem);

      
      if($( ".card-items .card" ).hasClass(linkItem)){
          const $items = $(".card-items");

        //   opacity off and on
          $('.card-items .card').addClass('anime-Opacity');
       

       

          console.log($items);

          $items.children('div:not(.' + linkItem + ')').hide();
            //   show all elements that do share ourClass
              $items.children('div.' + linkItem).show();
      }
    
    });



    


    $(document).ready(function() {
 
      $(".owl-carousel").owlCarousel({

        // loop: true,
        navigation:	false,
        navigationText : false,
        pagination: false,
        goToFirst:	true,
        autoWidth:true,
       
        // Responsive
        responsive: true,
        items : 4,
        itemsDesktop : [1300,4],
        itemsDesktopSmall : [1299,3],
        itemsTablet: [768,2],
        itemsMobile : [479,1]

      });

      $( "#owl-prev" ).click(function() {
        var owl = $(".owl-carousel").data('owlCarousel');
        owl.prev();
      });

      $( "#owl-next" ).click(function() {
        var owl = $(".owl-carousel").data('owlCarousel');
        owl.next();
      });

      // testimonial carousel

      $(".owl-stage").owlCarousel({
         //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
          
        //Autoplay
        autoPlay : true,
        goToFirst : true,
        goToFirstSpeed : 1000,

        // loop: true,
        navigation:	false,
        navigationText : false,
        pagination: false,
        goToFirst:	true,
        autoWidth:true,
       
        // Responsive
        responsive: true,
        items : 2,
        itemsDesktop : [1300,2],
        itemsDesktopSmall : [1299,2],
        itemsTablet: [768,2],
        itemsMobile : [767,1]

      });

      $( "#testimonial-prev" ).click(function() {
        var owl = $(".owl-stage").data('owlCarousel');
        owl.prev();
      });

      $( "#testimonial-next" ).click(function() {
        var owl = $(".owl-stage").data('owlCarousel');
        owl.next();
      });

      // partners carousel
      $(".partner-imagebox").owlCarousel({
        //Basic Speeds
       slideSpeed : 200,
         
       //Autoplay
       autoPlay : 10000,
       goToFirst : true,
       goToFirstSpeed : 1000,

       loop: true,
       navigation:	false,
       navigationText : false,
       pagination: false,
       goToFirst:	true,
       autoWidth:true,

      
       // Responsive
       responsive: true,
       items : 5,
       itemsDesktop : [1199,4],
       itemsDesktopSmall : [768,4],
       itemsTablet: [767,3],
       itemsMobile : [534,2]

     });
      
    });
  });

