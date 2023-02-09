$(document).ready(function() {

    $(".icon-menu").each(function() {
        $(this).on({
            mouseenter: function() {
                // var icon = $(this).children()[0].attr("scr") ;
                console.log($(this).children()[0])
                // console.log($(this).children()[0].attr("scr"))
                // var dataIcon = icon.split('.') ;
                // var newIcon = dataIcon[0]+"-colored"+".png" ;
                // $(this).children()[0].attr("scr","../icone/"+newIcon) ;
            },
            mouseleave: function() {
                
            }
        })
    })
})