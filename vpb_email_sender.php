<?php
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


// ini_set("error_reporting", E_NONE);

$to = "sanduku.default@gmail.com";
$from = "sanduku.default@gmail.com";
$subject = "Hello!"
$cc = "";
$bcc = "";

if(isset($_POST) == "POST")
{
	//Read POST request params into global vars
	$subject  = trim(strip_tags($_POST["subject"]));
	$phone    = trim(strip_tags($_POST["phone"]));
	$name     = trim(strip_tags($_POST["name"]));

	
	//Perform Validation Process
	if($to == "")
	{

	else
	{
		//If the user not attaches a file, then proceed with the email sending below with
		
			  $v_year = date("Y"); //Set Year for html email sending copyright at the footer
			  
			  //Check to see the email addresses supplied for email sending
			  if(!empty($cc) && !empty($bcc))
			  {
				  $setEmailArray = array($to,$cc,$bcc,$from);
			  }
			  elseif(!empty($cc) && empty($bcc))
			  {
				  $setEmailArray = array($to,$cc,$from);
			  }
			  elseif(empty($cc) && !empty($bcc))
			  {
				  $setEmailArray = array($to,$bcc,$from);
			  }
			  else
			  {
				  $setEmailArray = array($to,$from);
			  }
			  
			  $vpb_htmlmessage = nl2br($message_to_send);
			 
for($i = 0; $i < count($setEmailArray); $i++)
{

/* BEGINNING OF HTML MESSAGE BODY */
$vpb_message_body = "Hello!";
/* END OF HTML MESSAGE BODY */
      
     //SET UP THE EMAIL HEADERS
    $headers      = "From: <$from>\r\n";
    $headers   .= "Content-type: text/html; charset=iso-8859-1\r\n";
   
   //LETS SEND THE MESSAGE
   $vasplus_mailer_delivers_great_messages = mail($setEmailArray[$i], $subject, $vpb_message_body, $headers);
   if ($vasplus_mailer_delivers_great_messages) 
   {
	   $vpb_sent = "<font style="font-size:0px;">vpb_sent</font>";
	   $vpb_sent_status = "<br clear="all" /><div align="left" class="info">Congrats, your email message has been sent successfully! Thanks.</div>";
   } 
   else 
   {
	  $vpb_sent_status = "<br clear="all" /><div align="left" class="info">Sorry, your email could not be sent at the moment. Please try again or contact this website admin to report this error message if the problem persist (2). Thanks.</div>";
   }
}
echo $vpb_sent.$vpb_sent_status;
		  }
	}
}
?>
