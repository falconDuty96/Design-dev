$(document).ready(function() {

    /* Random number */
    function random(nbre) {
        return Math.floor(Math.random() * nbre | 0 || -1) ;
    }

    /* Card rotation */
    $(".card-rotate").each(function() {
        $(this).css({
            "transform": "rotate("+random(5)+"deg)" ,
        })
    })


    var stateIcon ;
    var stateTxt ;
    var elmentToChange = [] ;
    var initialConfig = 0 ;
    var anim ;
    var usedMenu = "" ;
    var usedIconName = "" ;
    var newIcon = "" ;
    var oldElementChanged ;
    var usedClassName = "" ;

    $(".icon-menu").each(function() {
        $(this).on({
            mouseenter: function() {
                var menuHovered = $(this).attr("id") ;
                if(usedMenu != menuHovered && initialConfig > 0) {
                    oldElementChanged[0].attributes[0].nodeValue = usedIconName ;
                    oldElementChanged[1].attributes["class"].nodeValue = usedClassName ;
                }
                clearTimeout(anim)
                var d = $(this).attr("data-shower") ;
                $('.boite-menu').css({
                    "display":"none"
                })
                $("#boite-"+d).css({
                    "display":"flex" ,
                })
                stateIcon = ""
                stateTxt = ""
                elmentToChange = $(this).children() ;
                oldElementChanged = $(this).children() ;
                var icon = $(this).children()[0].attributes[0].nodeValue ;
                stateIcon = icon ;
                usedIconName = icon ;
                var dataIcon = icon.split('.') ;
                newIcon = dataIcon[0]+"-colored"+".png" ;
                $(this).children()[0].attributes[0].nodeValue = newIcon ;
                stateTxt = $(this).children()[1].attributes["class"].nodeValue ;
                usedClassName = $(this).children()[1].attributes["class"].nodeValue ;
                $(this).children()[1].attributes["class"].nodeValue += " text-and-icon" ;
                initialConfig++ ;
            },
            mouseleave: function(a) {
                var d = $(this).attr("data-shower") ;
                anim = setTimeout(function() {
                    $("#boite-"+d).css({
                        "display":"none" ,
                    })
                    elmentToChange[0].attributes[0].nodeValue = stateIcon ;
                    elmentToChange[1].attributes["class"].nodeValue = stateTxt ;
                    stateIcon = "" ;
                    stateTxt = "" ;
                    elmentToChange = [] ;  
                },5) ;
                $("#boite-"+d).on({
                    mouseenter: function(c) {
                        c.stopImmediatePropagation()
                        clearTimeout(anim) ;
                    },
                    mouseleave: function(d) {
                        d.stopImmediatePropagation()
                        clearTimeout(anim) ;
                        $(this).css({
                            "display":"none" ,
                        })
                        elmentToChange[0].attributes[0].nodeValue = stateIcon ;
                        elmentToChange[1].attributes["class"].nodeValue = stateTxt ;
                        stateIcon = "" ;
                        stateTxt = "" ;
                        elmentToChange = [] ;   
                    }
                }) 
            }
        })
    })






    /* Flag link */
    $(".icon-flag-menu").each(function() {
        $(this).click(function() {
            var src = $(this).children()[0].attributes[0].nodeValue ;
            $("#flag-show").attr("src",src) ;
        })
    })

    
})