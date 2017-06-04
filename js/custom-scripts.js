$(document).ready(function () {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/"));
    $("#menu li").each(function(){
        if(($('a',this).attr("href")===pgurl)){
            $(this).addClass("active");
        }
    })
})
