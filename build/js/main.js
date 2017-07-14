$(document).ready(function() {
    
      var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                  
 
        var w_top = $(window).scrollTop();    
        var e_top = $(countbox).offset().top;   
 
        var w_height = $(window).height();      
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight();
 
        if(w_top  >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 7000
            });
 
            show = false;
        }
    });

});