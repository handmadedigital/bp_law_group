import Ember from 'ember';

export default Ember.Component.extend({
	classNames: [
		'video-intro-wrapper'
	],
	_tabState: "closed", // Closed, Open, Playing
	_mouseInside: false,
	initHoverTab: Ember.on("didInsertElement", function () {
		var self = this;
		$('.video-intro-position').on({
			mouseenter: function mouseenter() {
				console.log("mouse enter");
				self._mouseInside = true;
				if (self._tabState === "closed") {
					self.open();
				} 
			},
			mouseleave: function mouseleave() {
				console.log("mouse leave");
				self._mouseInside = false;
				if (self._tabState === "open") {
					self.close();
				}
			},
			click: function click() {
				console.log("click");
				self.close();
				console.log("its Open!");
				
			}
		});
	}),
	open: function() {
		console.log("open");
		this._tabState = "open";
		$('.video-intro-position').animate({
		    marginRight: "-60px"
		}, 1000, function() {
		    // Animation complete.
		});
	},
	close: function() {
		console.log("closed");
		this._tabState = "closed";
		$('.video-intro-position').animate({
		    marginRight: "-440px"
		}, 1000, function() {
		    // Animation complete.
		});
	},
	play: function() {
		console.log("play");
		this._tabState = "playing";
	},
	ended: function() {
		console.log("ended");
		this._tabState = "open";
		if (!this._mouseInside) {
			Ember.run.later(() =>
				{
					if (this._tabState === "open") {
						this.close();
					}
				}, 1000);
		}
	},
	pause: function() {
		console.log("paused");
		this._tabState = "paused";
	},
	actions: {
	  videoPlaying: function() {
	    this.play();
	  },
	  videoEnded: function() {
	    this.ended();
	  },
	  videoPause: function() {
	    this.pause();
	  }
	}
});

