<?php

if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';
require 'phpmailer/SMTP.php';

$name = $_POST['name'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];
$emailsubject = $_POST['emailsubject'];
$message = $_POST['message'];
$subject = 'Mensaje recibido desde www.iwomicrocorrugado.com.ar';

$recaptcha_secret = "6LcdFocnAAAAAFNBd06hfGGpXuZx12UJV7nUDiEZ"; //Add secret key
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
$response = json_decode($response, true);

if( empty(trim($name)) ) $name = 'anonimo';
// if( empty(trim($service)) ) $service = 'El Usuario no seleccionó ningún servicio';

$body = <<<HTML
    <h1>Mensaje recibido desde www.Iwomicrocorrugado.com.ar</h1>
    <p>De: $name | $email | $telephone</p>
    <p>Servicio por el que consulta: $emailsubject</p>
    $message
HTML;

$mailer = new PHPMailer(true);

try {
    //Server setting
    $mailer->SMTPDebug = 0;
    $mailer->isSMTP();
    $mailer->Host = 'c1762198.ferozo.com';
    $mailer->SMTPAuth = true;  
    $mailer->Username = 'info@iwomicrocorrugado.com.ar';
    $mailer->Password = 'Ivo2024*';
    $mailer->SMTPSecure = 'ssl';                          
    $mailer->Port = 465;

    
    //Recipients
    $mailer->setFrom( $email, "$name" );
    $mailer->addAddress('info@iwomicrocorrugado.com.ar','Sitio web');

    //Content
    $mailer->isHTML(true);
    $mailer->Subject = $subject;
    $mailer->msgHTML($body);
    $mailer->AltBody = strip_tags($body);
    $mailer->CharSet = 'UTF-8';

    

    if($response["success"] === true){
        $mailer->send();
        header("Location: thank-you.html" );
    } else {
        header("Location: 404.html" );
    }

   
} catch (Exception $e) {
    return "El mensaje no pudo ser enviado. Error: $mailer->ErrorInfo";
}



?>
