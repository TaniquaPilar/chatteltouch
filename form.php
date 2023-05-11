<?php
$email=$_POST["emailaddress"];
$name=$_POST["fullname"]
$to="chattelboards@gmail.com";
$subject="New Email Address for Mailing List";
$headers="From:$email\n";
$message="A visitor to your site has sent the following email
          address to be added to your mailing list.\n"

Email Address:"$email";
$user="$email";
$usersubject="Thank You";
$userheaders="From:chattelboards@gmail.com/n";
$usermessage="Thank you for subscribing to our mailing list.";
//mail($to, $subject, $message, $headers);
//mail($user, $usersubject, $usermessage, $userheaders);

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "chattelboards@gmail.com";
$mail->Password = "";

$mail->setFrom($email, $name);
$mail->addAddress("dave@example.com", "Dave");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

header("Location: sent.html")
?>
