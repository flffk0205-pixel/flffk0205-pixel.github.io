    $(document).ready(function(){
        // 모달 열기
        $(".btbox ul li.mod-1").click(function(){
            $(".modal").fadeIn();
        });

        // 모달 닫기
        $(".modal-close").click(function(){
            $(".modal").fadeOut();
        });


        $(".modal p  ").click(function(){
            $(this).parent('div').siblings('.modal-ul').slideToggle();
            $(this).children('i').toggleClass('rotate');
        });



        // 모달 열기
        $(".mod-2").click(function(){
            $('.mod').fadeIn();
        });
        // 모달 닫기
        $(".mod-close").click(function(){
            $(".mod").fadeOut();
        });
    });