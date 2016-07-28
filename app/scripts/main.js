$(function(){
  'use strict';
    // var noMSecsReqToHideSumoMe = 1500;
    // hide / show modal
    // $('a[title=\'SumoMe\']').show();
    // $('.sumome-vex.sumome-popup.sumome-popup-mode-subscribe').show();
    // $('.sumome-vex.sumome-popup.sumome-popup-mode-subscribe').hide();

    $('.clock').countdownDigital({
        dateTo: '2016-09-23T20:00',
        labels: false,
        showBlank: true,
        showMSecs: true,
        seperatorChar: ','
    });

    setTimeout(function(){
        $('#main-container').show();
    }, 500);
    
    console.log('We Are Red Stars!');
});
