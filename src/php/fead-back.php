<?
switch($_SERVER['REQUEST_METHOD']){
	case("OPTIONS"):
			header("Access-Control-Allow-Origin: *");
			header("Access-Control-Allow-Methods: POST");
			header("Access-Control-Allow-Headers: content-type");
			exit;
	case("POST"):
			header("Access-Control-Allow-Origin: *");

			$json = file_get_contents('php://input');

			$params = json_decode($json);

			if (!$params->message) {
				$subject = "Заказ обратного звонка с сайта vorotaprom.com.ua";
				$message = "Имя заказщика: ".$params->name."\nТелефон: ".$params->tel;
			} else if ($params->email) {
				$subject = "Письмо с сайта vorotaprom.com.ua";
				$message = "Имя: ".$params->name."\nТелефон: ".$params->tel."\nEmail: ".$params->email."\n\nСообщение: ".$params->message;
			}
			else {
				$subject = "Заказ товара с сайта vorotaprom.com.ua";
				$message = "Заказ: ".$params->order."\nИмя заказщика: ".$params->name."\nТелефон: ".$params->tel."\n\nСообщение: ".$params->message;
			}

			$recipient = 'info@vorotaprom.com.ua';
			$headers = "From: $name";

			mail($recipient, $subject, $message, $headers);
			break;
	default:
			header("Allow: POST", true, 405);
			exit;
}
?>
