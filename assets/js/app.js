$(document).ready(function() {
    var stateIcon ;
    var stateTxt ;
    $(".icon-menu").each(function() {
        $(this).on({
            
            mouseenter: function() {
                var icon = $(this).children()[0].attributes[0].nodeValue ;
                stateIcon = icon ;
                var dataIcon = icon.split('.') ;
                var newIcon = dataIcon[0]+"-colored"+".png" ;
                $(this).children()[0].attributes[0].nodeValue = newIcon ;
                stateTxt = $(this).children()[1].attributes["class"].nodeValue ;
                $(this).children()[1].attributes["class"].nodeValue += " text-and-icon" ;
            },
            mouseleave: function() {
                $(this).children()[0].attributes[0].nodeValue = stateIcon ;
                $(this).children()[1].attributes["class"].nodeValue = stateTxt ;
                stateIcon = "" ;
                stateTxt = "" ;
            }
        })
    })

})