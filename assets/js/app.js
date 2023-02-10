$(document).ready(function() {
    var stateIcon ;
    var stateTxt ;
    var elmentToChange = [] ;
    var initialConfig = 0 ;
    var anim ;
    $(".icon-menu").each(function() {
        $(this).on({
            
            mouseenter: function() {
                console.log("Miditra icone")
                clearTimeout(anim)
                
                
                

                var d = $(this).attr("data-shower") ;
                $('.boite-menu').css({
                    "display":"none"
                })
                $("#boite-"+d).css({
                    "display":"flex" ,
                })
                elmentToChange = $(this).children() ;
                var icon = $(this).children()[0].attributes[0].nodeValue ;
                stateIcon = icon ;
                var dataIcon = icon.split('.') ;
                var newIcon = dataIcon[0]+"-colored"+".png" ;
                $(this).children()[0].attributes[0].nodeValue = newIcon ;
                stateTxt = $(this).children()[1].attributes["class"].nodeValue ;
                $(this).children()[1].attributes["class"].nodeValue += " text-and-icon" ;
               
            },
            mouseleave: function(a) {
                var d = $(this).attr("data-shower") ;
                
                anim = setTimeout(function() {
                    
                    $("#boite-"+d).css({
                        "display":"none" ,
                    })
                    console.log("Nandeha ilay timer")
                    elmentToChange[0].attributes[0].nodeValue = stateIcon ;
                    elmentToChange[1].attributes["class"].nodeValue = stateTxt ;
                    stateIcon = "" ;
                    stateTxt = "" ;
                    elmentToChange = [] ;
                },5) ;
                $("#boite-"+d).on({
                    mouseenter: function(c) {
                        c.stopImmediatePropagation()
                        console.log("Miditra boite")
                        clearTimeout(anim) ;
                    },
                    mouseleave: function(d) {
                        d.stopImmediatePropagation()
                        console.log("Mivoaka boite")
                        clearTimeout(anim) ;
                        $(this).css({
                            "display":"none" ,
                        })
                        console.log(elmentToChange)
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