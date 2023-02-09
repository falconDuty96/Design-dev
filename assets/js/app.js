$(document).ready(function() {

    $(".icon-menu").each(function() {
        $(this).on({
            mouseenter: function() {
                console.log($(this))
            },
            mouseleave: function() {
                
            }
        })
    })
})