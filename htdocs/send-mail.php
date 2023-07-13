 <?php
 
$name = $_POST["name"];
$email = $_POST["email"];
//$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 465;

$mail->Username = "chattelenterprise@gmail.com";
$mail->Password = "riqldgmlzrzerykt";

$mail->setFrom($email, $name);
$mail->addAddress("thompson.p.taniqua@gmail.com");

$mail->Subject = $subject;
$mail->Body = $email;


$mail->send();

header("Location: sent.html");
?>