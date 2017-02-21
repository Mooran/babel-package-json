<?php 

// echo "Hello World!";

// function answer(): ?int  {
//     return "ceshi"; //ok
// }

// function answer(?string $msg): int {
//     return strlen($msg); //ok
// }
// function say(?string $msg) {
//     if ($msg) {
//         echo $msg;
//     } else {
//     	echo 'NULL';
//     }
// }

interface CanSpeek {
	public function WhatsYourName():String;
}

class Person implements CanSpeek {
	private $name;
	public function WhatsYourName(): string {
		return $this->name;
	}
	public function __construct(?string $name){
		$this->name = $name ?? 'zhongjianyu';
	}
}

$zhongjianyu = new Person('xiaoming');

echo $zhongjianyu->WhatsYourName();