$(document).ready( function() {
    $("li.dropdown-submenu > a").on("click", function(){
    $("li.dropdown-submenu").removeClass("open");
    if($(this).parent("li.dropdown-submenu").hasClass("in-use")){
    $(this).parents("li.dropdown-submenu").addClass("open");
    $(this).parent("li.dropdown-submenu").removeClass("open");
    $(this).parent("li.dropdown-submenu").removeClass("in-use");
    $(this).siblings('ul.dropdown-menu').children("li.dropdown-submenu").removeClass("open");
    $(this).siblings('ul.dropdown-menu').children("li.dropdown-submenu").removeClass("in-use");
    } else {
    $(this).parents("li.dropdown-submenu").addClass("open");
    $(this).parents("li.dropdown-submenu").addClass("in-use");
    }
    return false;
    });
    });

    $(document).ready(function(){

        $("ul li:has(ul)>a ").addClass("dropdown-toggle");
        
        $("ul li:has(ul)>a ").attr("data-toggle","dropdown");
        
        $("ul li:has(ul) ul ").addClass("dropdown-menu multi-level");
        
        $("ul ul li:has(ul) ").addClass("dropdown-submenu");
        
        });