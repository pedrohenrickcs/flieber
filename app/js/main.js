$(() => {
    console.log('slick');

    if ($(window).width() <= 768) {
        console.log('entrou no if');
        
        $('.detalhes').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
    
});