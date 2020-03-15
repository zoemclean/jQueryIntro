// alert ('javascript has loaded')
//$
//jQuery

// $(selector).effect()
            // .action()
            // .event()



$('#blueBox').hide();

$('#greenBox').click(function(){
    $('#blueBox').show();
});

$('#redBox').click(function(){
    $('#blueBox').hide();
});

$('#modalExample1Button').click(function(){
    // console.log('button has been clicked');
    $('#modalExample1').removeClass('hidden').addClass('flex');
    $('body').addClass('noScroll');
});

$('#modalExample1Close').click(function(){
    // console.log('button has been clicked');
    $('#modalExample1').addClass('hidden').removeClass('flex');
    $('body').removeClass('noScroll');
})

$('#navListToggleButton').click(function(){
    // $('#navList').toggle();
    $('#navList').slidetoggle(300);
})
