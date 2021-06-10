$(document).ready(() => {
    
 
//Setting up today's date and time
    var time = moment();

    $("#currentDay").text(time.format('dddd MMMM Do YYYY, h:mm:ss a'))

//Setting up textarea to be stored in local storage
    $('.location').on('click', function () {
        console.log(this)
        var id = $(this).parent().attr('id')
        console.log(id)
        var notes = $(this).siblings('textarea').val();
        console.log(notes)
        localStorage.setItem(id , notes)

        
   
      });

    $('#hr-9').children("textarea").val(localStorage.getItem("hr-9"))

    $('#hr-10').children("textarea").val(localStorage.getItem("hr-10"))

    $('#hr-11').children("textarea").val(localStorage.getItem("hr-11"))

    $('#hr-12').children("textarea").val(localStorage.getItem("hr-12"))

    $('#hr-13').children("textarea").val(localStorage.getItem("hr-13"))

    $('#hr-14').children("textarea").val(localStorage.getItem("hr-14"))

    $('#hr-15').children("textarea").val(localStorage.getItem("hr-15"))

    $('#hr-16').children("textarea").val(localStorage.getItem("hr-16"))
    
    $('#hr-17').children("textarea").val(localStorage.getItem("hr-17"))
    
    
});
//Adding color for present, past, and future
$('.present').on( function(){
    var notes = $('.present').val();
    console.log(notes)
    $('textarea').css('.background',);

});
$('.past').on( function(){
    var notes = $('.past').val();
    console.log(notes)
    $('textarea').css('.background',);

});
$('.future').on( function(){
    var notes = $('.future').val();
    console.log(notes)
    $('textarea').css('.background',);

});



   
   




