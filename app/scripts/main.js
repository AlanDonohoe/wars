$(function(){
  'use strict';
    $('.clock').countdownDigital({
        dateTo: '2016-09-16T16:00',
        labels: false,
        showBlank: true
    });
    // hide sumoMe side bar....
    // $('a[title=\'SumoMe\']').hide(); // or....
    $('a[title=\'SumoMe\']').css('background-color', 'black');
    // hide / show modal
    // $('a[title=\'SumoMe\']').show();
    // $('.sumome-vex.sumome-popup.sumome-popup-mode-subscribe').show();
    // $('.sumome-vex.sumome-popup.sumome-popup-mode-subscribe').hide();

    // console.log('We Are Red Stars!');
});
