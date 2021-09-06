$('.nav-select li').click(function() {
    console.log($('section[data-id = '+content+']'))
    var content = $(this).attr('data-id');
    $('section[data-id = '+content+']').addClass('open');   
})

$('.btn-close').click(function() {
    if ($(this).closest('section').hasClass('open')) {
        $(this).closest('section').removeClass('open')
    }
})