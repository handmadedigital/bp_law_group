import Ember from 'ember';

export default Ember.Controller.extend({
	sendEmail() { var newEmail = {
        "html": "<p>Example HTML content</p>",
        "text": "Example text content",
        "subject": "example subject",
        "from_email": "message.from_email@example.com",
        "from_name": "Example Name",
        "to": [
            {
                "email": "carlos@tgld.co",
                "name": "Carlos"
            }
            ]
      };

      this.mandrill.send(newEmail).then(function(response) {
  		  console.log(response);
  	  });
  	}
});
