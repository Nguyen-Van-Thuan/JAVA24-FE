$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    loop: true, /* Vong lap slide*/
    margin: 20, /* K/C giua 2 phan tu*/
    nav: false, /* Thanh dieu huong*/
    dots: false, /* Dau cham */
    autoplay: true, /* Slider tu dong chay*/
    autoplayTimeout: 2000, /*Thoi gian chuyen slider*/
    responsive: {
      /* Hien thi item tren cac khoang man hinh */
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items:1
      }
    }
  })

});
