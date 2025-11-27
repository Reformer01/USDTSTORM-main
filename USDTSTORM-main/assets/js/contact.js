(function ($) {
    "use strict";
        $(document).on('submit','#contact_form_submit',function(e){
            e.preventDefault();
            var name = $('#contact_name').val();
            var email = $('#contact_email').val();
            var message = $('#contact_message').val();
            if (!name) {
                 $('#contact_name').removeClass('error');
                 $('#contact_name').addClass('error').attr('placeholder','Please Enter Name');
             }else{
                 $('#contact_name').removeClass('error');
             }
            if (!email) {
                 $('#contact_email').removeClass('error');
                 $('#contact_email').addClass('error').attr('placeholder','Please Enter Email')
             }else{
                 $('#contact_email').removeClass('error');
             }
            if (!message) {
                 $('#contact_message').removeClass('error');
                 $('#contact_message').addClass('error').attr('placeholder','Please Enter Your Message')
             }else{
                 $('#contact_message').removeClass('error');
             }
            if ( name && email && message ) {
                 $.ajax({
                     type: "POST",
                     url:'contact.php',
                     data:{
                         'name': name,
                         'email': email,
                         'message': message,
                     },
                     dataType: 'json',
                     success:function(data){
                         var success = data && data.success;
                         var messageText = (data && data.message) ? data.message : 'Thanks for reaching out.';
                         $('#contact_form_submit').children('.email-success').remove();
                         var alertClass = success ? 'alert-success' : 'alert-danger';
                         $('#contact_form_submit').prepend('<span class="alert '+alertClass+' email-success contact-alert">'+messageText+'</span>');
                         if(success){
                             $('#contact_name').val('');
                             $('#contact_email').val('');
                             $('#contact_message').val('');
                         }
                         $('.email-success').fadeOut(3000);
                     },
                     error:function(res){
                        $('#contact_form_submit').children('.email-success').remove();
                        var errorMessage = 'Something went wrong';
                        if(res && res.responseJSON && res.responseJSON.message){
                            errorMessage = res.responseJSON.message;
                        }
                        $('#contact_form_submit').prepend('<span class="alert alert-danger email-success contact-alert">'+errorMessage+'</span>');
                        $('.email-success').fadeOut(3000);
                     }
                 });
             }else{
                $('#contact_form_submit').children('.email-success').remove();
                $('#contact_form_submit').prepend('<span class="alert alert-danger email-success contact-alert">Please fill in all required fields.</span>');
                $('.email-success').fadeOut(3000);
             }
        });
}(jQuery));