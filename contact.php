<?php

  $errors = [];

  if (isset($_POST)) {

    $data = file_get_contents("php://input");
    $contents = json_decode($data, true);

    $name = htmlspecialchars($contents['formName']);
    $phone = htmlspecialchars($contents['formPhone']);
    $company = htmlspecialchars($contents['formCompany']);
    $email = htmlspecialchars($contents['formEmail']);
    $message = htmlspecialchars($contents['formMessage']);
    
    if (empty($name)) {
      $errors[] = 'Name is empty';
    }

    if (empty($email)) {
      $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = 'Email is invalid';
    }

    if (empty($message)) {
      $errors[] = 'Message is empty';
    }
  }

  if (empty($errors)){
    $to = "ewassom@fbogrowth.com";
    $subject = 'fboContactForm';
    $from = "ewassom@fbogrowth.com";
    $headers = ['From' => $from, 'Reply-To' => $from, 'Content-type' => 'text/html; charset=utf-8'];
    $messageInfo = ["Name: {$name}", "Phone: {$phone}", "Company: {$company}", "Email: {$email}", "Message:", $message];
    $message = join(PHP_EOL, $messageInfo);

    mail($to, $subject, $message, $headers);
    echo "message sent \n";
    echo $message;
  }

  if (!empty($errors)) {
    $allErrors = join('<br/>', $errors);
    $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
  }



?>