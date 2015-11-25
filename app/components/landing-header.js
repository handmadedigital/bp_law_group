import Ember from 'ember';

export default Ember.Component.extend({
	headerBgOnScroll: function() {
    	$(window).scroll(function() {
		    if ($(window).scrollTop() > 100) {
		        $('.navbar-default').css("background", '#252F35');
		    }
		    else{
		        $('.navbar-default').css("background", 'rgba(0,0,0,0)');
		    }
		});
  }.on('didInsertElement')
});
