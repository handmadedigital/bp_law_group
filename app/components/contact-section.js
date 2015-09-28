import Ember from 'ember';

export default Ember.Component.extend({
	mandrill: Ember.inject.service('mandrill'), 
	actions: {
	    sendMandrillEmail: function() {
	      let emailObject = {
	        message: {
	          html: 'Test Message',
	          subject: 'Test Subject',
	          from_email: 'carlos@tgld.co',
	          from_name: 'Test Name',
	          to: [
	              {
	                  email: 'carlos@tgld.co',
	                  name: 'Test Carlos',
	                  type: "to"
	              }
	          ]
	        }
	      };

	      this.mandrill.send(emailObject).then(function(response) {
	        console.log(response);
	      });
	    }
	}
});


