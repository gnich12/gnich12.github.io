$(document).ready(function() {

    var time = new Date();
    var mm = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    //set up the time on the footer
    var myVar = setInterval(function() {
        myTimer();
    }, 1000);
    
    //animates the header of the pages
    $('#halfOne').hide().fadeIn(1000);
    $('#halfTwo').hide().fadeIn(3000);
    $('h1').hide().fadeIn(1500);
    $('h3').hide().fadeIn(2500);
    $('h4').hide().fadeIn(3500);
    
    //add times to footer
    $("#dtime").append(mm[time.getMonth()] + ", " + time.getDate() + " " + time.getFullYear());
    
    //just for fun
    var yay="<div id='fun'><iframe frameborder='0' width='480' height='270' src='//www.dailymotion.com/embed/video/x23woqt?autoPlay=1' allowfullscreen></iframe><br /><a href='http://www.dailymotion.com/video/x23woqt_guardians-of-the-galaxy-movie-clip-dancing-baby-groot-2014-vin-diesel-marvel-movie-hd_shortfilms' target='_blank'>Guardians of the Galaxy Movie CLIP - Dancing...</a> <i>by <a href='http://www.dailymotion.com/hiphopdaily' target='_blank'>hiphopdaily</a></i></div>";
    var fail="<div id='fun'><iframe frameborder='0' width='480' height='270' src='//www.dailymotion.com/embed/video/x1vkzqg?autoPlay=1' allowfullscreen></iframe><br /><a href='http://www.dailymotion.com/video/x1vkzqg_laughing-donkey_fun' target='_blank'>Laughing Donkey</a> <i>by <a href='http://www.dailymotion.com/Hrodis' target='_blank'>Hrodis</a></i></div>";
    $('#secretWord').submit(function(event){
        if($("#question").val()==="laugh"){
                       
            if($('#fun').length>0){
                $('#fun').remove();
                $('#txt').html("Yay!!! Let's Party");
                $('#vid').append(yay);
            }else{
                $('#txt').html("Yay!!! Let's Party");
                $('#vid').append(yay);
            }            
        }else{
            if($('#fun').length>0){
                $('#fun').remove();
                $('#txt').html("Aww!!! try again");
                $('#vid').append(fail);
            }else{
                $('#txt').html("Aww!!! try again");
                $('#vid').append(fail);
            }
            
        }
        event.preventDefault();
    });
    
    $('ol').hide();
    $('#hint').click(function(){
        $('ol').toggle();
    });
    
});


function myTimer() {
    var d = new Date();
    $('#clock').html(d.toLocaleTimeString());
}