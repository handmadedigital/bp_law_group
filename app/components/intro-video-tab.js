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
					self.opening();
				} 
			},
			mouseleave: function mouseleave() {
				console.log("mouse leave");
				self._mouseInside = false;
				if (self._tabState === "open") {
					self.close();
				} else if (self._tabState === "paused") {
					self.close();
				} else if (self._tabState === "playing") {
					
				}
			},
			click: function click() {
				console.log("click");
				self.close();
				console.log("its Open!");
				
			}
		});
	}),
	opening: function() {
		console.log("opening");
		this._tabState = "opening";
		$('.video-intro-position').animate({
		    marginRight: "-60px"
		}, 1000, function() {
		    // Animation complete.
		});

		Ember.run.later(() =>
		{	
			if (this._tabState === "playing") {
					this.play();
				} 
			else if(!this._mouseInside){
					this.close();
			} 
			else {
					this.open();
			}
		}, 1500);
	},
	open: function() {
		console.log("open");
		this._tabState = "open";
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
		console.log("playing");
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
	  videoPaused: function() {
	    this.pause();
	  }
	}
});

