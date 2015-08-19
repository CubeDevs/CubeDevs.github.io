/*!
 +-------------------------------------+
 * CubeDevelopers                      *
 * ComingSoon for CubeDevs.com         *
 * http://hosseinkarami.com            *
 * @author Hossein Karami (@_Karamii)  *
 * @version 1.0.3                      *
 * Copyright 2015. MIT licensed.       *
 +-------------------------------------+
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $('.gradient').css('opacity', 1);
    setTimeout(function() {
  		$('.Hello .one').css('opacity', 1);
  	}, 1500);
    setTimeout(function() {
  		$('.Hello .two').css('opacity', 1);
  	}, 2500);
    setTimeout(function() {
  		$('.Hello .three').css('opacity', 1);
  	}, 3500);
  });

})(jQuery, window, document);
