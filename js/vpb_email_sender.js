/***********************************************************************************************************
* Send Email with Cc, Bcc and File Attachment using Ajax, Jquery and PHP
* Written by Vasplus Programming Blog
* Website: www.vasplus.info
* Email: info@vasplus.info

**********************************Copyright Information*****************************************************
* This script has been released with the aim that it will be useful.
* Please, do not remove this copyright information from the top of this page 
* If you want the copyright info including the to be removed from the script then you have to buy this script.
* This script must not be used for commercial purpose without the consent of Vasplus Programming Blog.
* This script must not be sold.
* All Copy Rights Reserved by Vasplus Programming Blog
*************************************************************************************************************/




//This function sends all emails
function vpb_send_email() 
{
	//Variables declaration
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var to = $('sanduku.default@gmail.com').val();
	var from = $('sanduku.default@gmail.com').val();
	var subject = $('Hello').val();
	var phone = $('#phone').val();
	var name = $('#name').val();

	

	var dataString = "to=" + to + "&from=" + from + "&subject=" + subject + "&phone=" + phone + "&name=" + name;
		
	if(attachedfile == "")
	{
		$.ajax({
			type: "POST",
			url: "vpb_email_sender.php",
			data: dataString,
			cache: false,
			beforeSend: function() 
				{
					$("#vpb_mailer_response").html('');
					$("#vpb_mailer_response").html('<br clear="all"><div style="font-family: Verdana, Geneva, sans-serif; font-size:12px; color:black; float:left; padding-left:110px;" align="center">Please wait <img src="images/loadings.gif" align="absmiddle" alt="Sending...." title="Sending...."/></div><br clear="all"><br clear="all">');
				},
				success: function(response)
				{
					var response_brought = response.indexOf('vpb_sent');
					if (response_brought != -1) 
					{
						$('#to').val('');
						$('#from').val('');
						$('#subject').val('');
						$('#phone').val('');
						$('#name').val('');
						$("#vpb_mailer_response").hide().fadeIn('fast').html(response);
					}
					else
					{
						$("#vpb_mailer_response").hide().fadeIn('fast').html(response);
					}
				}
			});
		}
		else
		{
			$("#vasPLUS_Programming_Blog_Form").vPB({
				url: 'vpb_email_sender.php?' + dataString,
				beforeSubmit: function() 
				{
					$("#vpb_mailer_response").html('');
					$("#vpb_mailer_response").html('<br clear="all"><div style="font-family: Verdana, Geneva, sans-serif; font-size:12px; color:black; float:left; padding-left:110px;" align="center">Please wait <img src="images/loadings.gif" align="absmiddle" alt="Sending...." title="Sending...."/></div><br clear="all"><br clear="all">');
				},
				success: function(response) 
				{
					var response_brought = response.indexOf('vpb_sent');
					if (response_brought != -1) 
					{
						$('#to').val('');
						$('#cc').val('');
						$('#bcc').val('');
						$('#from').val('');
						$('#subject').val('');
						$('#message').val('');
						$("#vpb_mailer_response").hide().fadeIn('fast').html(response);
					}
					else
					{
						$("#vpb_mailer_response").hide().fadeIn('fast').html(response);
					}
				}
			}).submit();
		}
	}
}
