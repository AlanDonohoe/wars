$(function(){
  'use strict';
    console.log('We Are Red Stars!');
    $('.clock').countdownDigital({
        dateTo: '2016-09-16T16:00',
        labels: false,
        showBlank: true
    });
    // hide sumoMe side bar....
    $("a[title='SumoMe']").hide();
    // hide / show modal
    // $('.sumome-vex.sumome-popup.sumome-popup-mode-subscribe').show();
    // $('.sumome-vex.sumome-popup.sumome-popup-mode-subscribe').hide();
});
