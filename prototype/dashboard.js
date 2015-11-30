$(document).ready(function(){
    $("body").tabs();

    $("div#sidebar > ul > li").click(function() {
        $(this).find('ul').toggle();
    });
});
