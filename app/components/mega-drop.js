import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		hoverMenu();
		adjustWidth();
		mobileMenu();
		responsiveHeader();
		bpWrapperWidth();
		$(window).resize(function() {
	        responsiveHeader();
	        bpWrapperWidth();
    	});
	}
});

function hoverMenu()
{
	$('.has-submenu').find('.submenu-wrapper').fadeOut("fast");
	$('.has-submenu').on({
		mouseenter: function(){
			$(this).find('.submenu-wrapper').stop().fadeIn("fast");
		},
		mouseleave: function(){
			$(this).find('.submenu-wrapper').stop().fadeOut("fast");
		}
	});
}

function adjustWidth()
{
	setWidth();
	$(window).resize(function(){
		setWidth();
	});
}

function setWidth()
{
	var mega_submenu = $('.tgl-megadrop .has-submenu .submenu-wrapper');
	var menu_width = $('.tgl-megadrop').width();
	var left_margin = $('.tgl-megadrop').offset().left;

	if(mega_submenu.hasClass('mega-full-width'))
	{
		mega_submenu.css({
			"left": left_margin + "px",
			"max-width": menu_width + "px"
		});
	}
	else
	{
		mega_submenu.css({
			"max-width": menu_width + "px"
		});
	}
}

function responsiveHeader()
{
	var window_width = $(window).width();
	var mainMenu = $('#mainMenu');
	var mobileMenu = $('#mobileMenu');

	if (window_width < 1600) {
   		mainMenu.addClass('is-disabled');
   		mainMenu.removeClass('is-active');
   		mobileMenu.addClass('is-active');
   		mobileMenu.removeClass('is-disabled');
	}
	else {
	   mainMenu.removeClass('is-disabled');
	   mainMenu.addClass('is-active');
	   mobileMenu.addClass('is-disabled');
	   mobileMenu.removeClass('is-active');
	}
}

function bpWrapperWidth()
{
	var bpWrapper = $('#bp-web-wrapper');
	var wrapperWidth = $('#bp-web-wrapper').width();
	bpWrapper.css({
		"width": wrapperWidth + "px"
	});
	
}

function mobileMenu()
{
	
	var sideMenu = $('#sideMenu');
	var sideMenuLi = $('#sideMenu li a');
	var mobileMenuButton = $('.mobile-menu-button');
	var mobileMenu = $('#mobileMenu');
	var bpWrapper = $('#bp-web-wrapper');

	mobileMenuButton.on({
		click: function(event){

			if (sideMenu.hasClass('is-disabled')) {
					sideMenu.removeClass('is-disabled');
					sideMenu.addClass('is-active');
					bpWrapper.animate({
					    marginLeft: "-300px"
					  }, 600, function() {
					    // Animation complete.
					  });
					sideMenu.animate({
					    marginRight: "0"
					  }, 600, function() {
					    // Animation complete.
					  });
					return false;
					event.prventDefault();

			}
			else if (sideMenu.hasClass('is-active')){
					sideMenu.removeClass('is-active');
					sideMenu.addClass('is-disabled');
					bpWrapper.animate({
					    marginLeft: "0px"
					  }, 600, function() {
					    // Animation complete.
					  });
					sideMenu.animate({
					    marginRight: "-300px"
					  }, 600, function() {
					    // Animation complete.
					  });
					return false;
					event.prventDefault();
			}
		}
	});

	sideMenuLi.on({
		click: function(event){
			sideMenu.removeClass('is-active');
			sideMenu.addClass('is-disabled');
			bpWrapper.animate({
			    marginLeft: "0px"
			  }, 600, function() {
			    // Animation complete.
			  });
			sideMenu.animate({
			    marginRight: "-300px"
			  }, 600, function() {
			    // Animation complete.
			  });
		}
	});

	
}
