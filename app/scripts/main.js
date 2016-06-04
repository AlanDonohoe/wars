$(function(){
    console.log('We Are Red Stars!');
    $(".clock").countdownDigital({
        dateTo: '2016-09-16T16:00',
        labels: false,
        showBlank: true
    });
});