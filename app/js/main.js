$(() => {
    console.log('slick V1.0.0');

    if ($(window).width() <= 768) {
        console.log('entrou no if');
        
        $('.detalhes').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        });

        $('#option .option').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        });

        $('#why .box-card').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        });
    }
    
});