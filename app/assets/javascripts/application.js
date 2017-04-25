// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require tether
//= require bootstrap-sprockets
//= require rails.validations
//= require_tree .

$(document).on('turbolinks:load', function(){
  //scroll viewer
  var revealClass = '.animated';
  var targetClass = '.has-scroll-reveal:not(' + revealClass + ')';
  var offset = 50;
  var winHeight = $(window).height();

  $(window).on('resizeEnd', function() {
    winHeight = $(window).height();
  });

  triggerAnimation(revealClass, targetClass, offset, winHeight);

  $(window).on('scroll', function() {
    triggerAnimation(revealClass, targetClass, offset, winHeight);
  });

  function triggerAnimation(revealClass, targetClass, offset, winHeight) {

    var trigger = $(window).scrollTop() + winHeight - offset;

    $(targetClass).each(function() {
      var elementOffset = $(this).offset().top;
      if( elementOffset < trigger ) {
        $(this).addClass( revealClass.replace('.','') );
      }
    });
  }
  $(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
  });

  $('.steps').css('top', stepDistance)
  var stepDistance = -240
  
  $(window).on('scroll',function() {
    var wScroll = $(this).scrollTop();
    var pixels= (wScroll/4)

    if (wScroll <= winHeight){
      $('.steps').css("top", stepDistance - pixels + "px")
    }
    //console.log(wScroll)
    stepAnimated()
  });

  function stepAnimated(){
    $('.stepAp.animated').each(function(i){
      setTimeout(function(){
        $('.stepAp.animated').eq(i).addClass('bounceIn');
      }, 200 * i);
    });
  }

  stepAnimated()
});