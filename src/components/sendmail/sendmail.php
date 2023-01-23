<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	/*
	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'user@example.com';                     //SMTP username
	$mail->Password   = 'secret';                               //SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
	$mail->Port       = 465;                 
	*/

	//Від кого лист
	$mail->setFrom($_POST['email'], $_POST['name']); // Вказати потрібний E-mail
	//Кому відправити
	$mail->addAddress('to@gmail.com'); // Вказати потрібний E-mail
	//Тема листа
	$mail->Subject = 'Новый клиент';

	//Тіло листа
	// $body = '<h1>Новый клиент' .$_POST['name']. '</h1>';

	// if(trim(!empty($_POST['email']))){
	// 	$body.=$_POST['email'];
	// }	

	if(trim(!empty($_POST['name']))){
		$body.='<h1>Новый клиент' .$_POST['name']. '</h1>';
	}	
	
	if(trim(!empty($_POST['learn']))){
		$body.='<p>Курс:' .$_POST['learn']. '</p>';
	}	
	if(trim(!empty($_POST['phone']))){
		$body.='<p>Номер телефона:' .$_POST['phone']. '</p>';
	}	
	if(trim(!empty($_POST['additionally']))){
		$body.='<p>' .$_POST['additionally']. '</p>';
	}	

	/*
	//Прикріпити файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//шлях завантаження файлу
		$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name']; 
		//грузимо файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото у додатку</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
	*/

	$mail->Body = $body;

	//Відправляємо
	if (!$mail->send()) {
		$message = 'Помилка';
	} else {
		$message = 'Дані надіслані!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>