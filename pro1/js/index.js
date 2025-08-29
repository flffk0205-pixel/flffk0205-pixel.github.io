  $(window).scroll(function() {
  
    if ($(this).scrollTop() > 100) {
          $("header").css({'opacity':1});
          
        } else {
          $("header").css({'opacity':0});
          
          }
  }); 
