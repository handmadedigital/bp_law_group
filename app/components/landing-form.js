import Ember from 'ember';

export default Ember.Component.extend({
	classNames: [
		'cta-form-wrapper'
	],
	mandrill: Ember.inject.service('mandrill'),
	actions: {
		sendMandrillEmail: function() {

			var leadName = $('#name1').val();
			var leadEmail = $('#email1').val();
			var leadPhone = $('#phone1').val();
			var leadMessage = $('#message1').val();
			var leadHtml = 'Name:' + leadName +'<br/>' + 'Email:' + leadEmail +'<br/>' + 'Phone:' + leadPhone + '<br/>' + 'Message:' +leadMessage;

			let emailObject = {
				message: {
					html: leadHtml,
					subject: 'Landing Page Lead',
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
					$('.confirmation').css('border-color', '#FF0000');
					setTimeout(function(){
						$('.confirmation').css('border-color', '#F0DCA4');
					}, 4000);
				} else if( status === 'sent' ){
					$('.confirmation').css('border-color', '#54BB5B').html('Thank You!');
					window.location.replace("http://www.baisdenperezlaw.com/thank-you-page/");
					setTimeout(function(){
						$('.confirmation').css('border-color', '#F0DCA4').html("Get Started");
					}, 4000);
					$('.form-control').val('');
					window.location.replace("http://www.baisdenperezlaw.com/thank-you-page/");
				}

			});

			

		}
	}
});
