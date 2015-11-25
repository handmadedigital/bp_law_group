import Ember from 'ember';

export default Ember.Controller.extend({
	currentPathChanged: function () {
	window.scrollTo(0, 0);
	}.observes('currentPath'),
	isLandingRoute: Ember.computed.equal('currentRouteName', 'landing-page')
	

});

