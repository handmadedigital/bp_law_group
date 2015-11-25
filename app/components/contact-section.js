import Ember from 'ember';

export default Ember.Component.extend({
	mandrill: Ember.inject.service('mandrill'),
	actions: {
	    sendMandrillEmail: function() {
	      var leadName = $('#name').val();
	      var leadEmail = $('#email').val();
	      var leadSubject = $('#subject').val();
	      var leadMessage = $('#message').val();
	      var leadHtml = 'Name:' + leadName +'<br/>' + 'Email:' + leadEmail +'<br/>' + 'Subject:' + leadSubject + '<br/>' + 'Message:' +leadMessage;

	      let emailObject = {
	        message: {
	          html: leadHtml,
	          subject: leadSubject,
	          from_email: leadEmail,
	          from_name: leadName,
	          to: [
		            {
					  email: 'rb@baisdenperezlaw.com',
					  name: 'Randell Baisden',
					  type: "to"
					},
					{
					  email: 'mario@baisdenperezlaw.com',
					  name: 'Mario Perez',
					  type: "to"
					},
					{
					  email: 'michele@baisdenperezlaw.com',
					  name: 'Michele',
					  type: "to"
					},
					{
					  email: 'account@tgld.co',
					  name: 'Carlos',
					  type: "to"
					}
	          ]
	        }
	      };

	      

	      this.get('mandrill').send(emailObject).then(function(response) {
	        var status = response[0].status;
	        console.log(status);
	        if ( status === 'rejected'){
	        	$('.form-control').val('');
	        	$('.contactButton').css('border-color', '#FF0000');
	        	setTimeout(function(){
				  $('.contactButton').css('border-color', '#F0DCA4');
				}, 2000);
	        } else if( status === 'sent' ){
	        	$('.contactButton').css('border-color', '#54BB5B').html('Thank You!');
	        	setTimeout(function(){
				  $('.contactButton').css('border-color', '#F0DCA4').html("Let's Talk");
				}, 2000);
	        	$('.form-control').val('');
	        }

	      });
	      
	    }
	}
});


