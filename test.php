<?php
  $to = "toddcmz@gmail.com"; // <– replace with your address here
  $subject = "testMail";
  $message = "Hello, this is a test message.";
  $from = "godaddy@testing.com";
  $headers = "From:" . $from;
  mail($to,$subject,$message,$headers);
  echo "Mail Sent.";
?>