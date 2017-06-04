$(document).ready(function() {

    $('#imglist').addClass("wrappedElement");
  
    $('#hideImg').click(function(event) {
        $("#imglist img").hide();
    });
    
    $('#showEvenImg').click(function(event) {
        $("#imglist img:even").show('slow');
    });
    
    $('#showOddImg').click(function(event) {
        $("#imglist img:odd").show('slow');
    });

    $('#lShift').bind("click", function(event) {
        event.stopPropagation();
        var i = $('#imglist img:eq(0)').remove();
        $('#imglist ').append(i);
        event.preventDefault();
    });

    $('#rShift').bind("click", function(event) {
        event.stopPropagation();
        var i = $('#imglist img:eq(4)').remove();
        $('#imglist').prepend(i);
        event.preventDefault();
    });

});
