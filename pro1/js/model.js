$(function() {   
$('.sec1 ul li').click(function() {
		$(this).addClass('sec1-bt');
		$(this).siblings('li').removeClass('sec1-bt');	
        });


$('#bt-1').click(function() {
			$('.elec').css({'display':'flex'});	
			$('.conv').hide();	
    });   

$('#bt-2').click(function() {
			$('.conv').css({'display':'flex'});	
			$('.elec').hide();	
    });   


  $(window).scroll(function() {
  
    if ($(this).scrollTop() > 100) {
          $("header").css({'opacity':1});
          
        } else {
          $("header").css({'opacity':0});
          
          }
  }); 


});  