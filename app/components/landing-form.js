import Ember from 'ember';

export default Ember.Component.extend({
	classNames: [
		'cta-form-wrapper'
	],
	mandrill: Ember.inject.service('mandrill'),
	actions: {
		sendMandrillEmail: function() {

			var leadName = $('#name1').val();
			var leadEmailStatus = true;
			var leadEmail = $('#email1').val();
			var leadPhone = $('#phone1').val();
			var leadMessage = $('#message1').val();
			var leadHtml = 'Name:' + leadName +'<br/>' + 'Email:' + leadEmail +'<br/>' + 'Phone:' + leadPhone + '<br/>' + 'Message:' +leadMessage;

			let thankYouEmail = {
				template_name: "Lead Form Confirmation",
			    template_content: [
			        {
			            name: "firstName",
			            content: leadName
			        }
			    ],
				message: {
					html: leadHtml,
					subject: 'Hello ' + leadName + ', Thank you for contacting us!',
					from_email: 'contact@baisdenperezlaw.com',
					from_name: 'Baisden & Perez Law',
					to: [
						{
						  email: leadEmail,
						  name: leadName,
						  type: "to"
						}
					]
				}
			};

			let newLeadUpdate = {
				message: {
					html: leadHtml,
					subject: 'New Landing Page Lead!',
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

			this.get('mandrill').sendTemplate(thankYouEmail).then(function(response) {
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
					setTimeout(function(){
						$('.confirmation').css('border-color', '#F0DCA4').html("Get Started");
					}, 4000);
					$('.form-control').val('');
				}

			});

			this.get('mandrill').send(newLeadUpdate).then(function(response) {
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
