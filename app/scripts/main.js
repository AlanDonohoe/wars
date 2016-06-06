$(function(){
  'use strict';
  var noMSecsReqToHideSumoMe = 1500;
    $('.clock').countdownDigital({
        dateTo: '2016-09-16T16:00',
        labels: false,
        showBlank: true
    });
    // hide sumoMe side bar....
    setTimeout(function() { $('a[title=\'SumoMe\']').hide(); }, noMSecsReqToHideSumoMe);
    // to override: $('a[title=\'SumoMe\']').show();

    // hide / show modal
    // $('a[title=\'SumoMe\']').show();
    // $('.sumome-vex.sumome-popup.sumome-popup-mode-subscribe').show();
    // $('.sumome-vex.sumome-popup.sumome-popup-mode-subscribe').hide();

    console.log('We Are Red Stars!');
});
