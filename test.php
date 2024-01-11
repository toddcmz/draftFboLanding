<?php
  $to = "toddcmz@gmail.com"; // <– replace with your address here
  $subject = "testMail";
  $message = "Hello, this is a test message.";
  $from = "todd@devtlc.co";
  $headers = ['From' => $from, 'Reply-To' => $from, 'Content-type' => 'text/html; charset=utf-8'];
  mail($to,$subject,$message,$headers);
  echo "Mail Sent.";
?>