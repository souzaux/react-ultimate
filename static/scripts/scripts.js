$(document).ready(function(){"use strict";var n=function(){function n(){var n=$(window).scrollTop();Math.abs(e-n)<=o||(n>e&&n>r?t.removeClass("navbar-down").addClass("navbar-up"):n+$(window).height()<$(document).height()&&t.removeClass("navbar-up").addClass("navbar-down"),e=n)}var a,e=0,o=5,i=250,r=t.outerHeight();$(window).scroll(function(){a=!0}),setInterval(function(){a&&(n(),a=!1)},i)},a=function(){$(document).on("click","#page-header .navbar-collapse.in",function(n){$(n.target).is("a")&&o.collapse("hide")})},e=function(){$(document).mouseup(function(n){o.is(n.target)||0!==o.has(n.target).length||o.collapse("hide")})},t=$("#page-header");if(t.length){n();var o=t.find(".navbar-collapse");o.length&&(a(),e())}});