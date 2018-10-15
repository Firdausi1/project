<?php
    // include 'index.html';

    
    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
        $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    if(!empty($name) && !empty($email) && !empty($message)){
        $to = 'admissions@vedasend.net';
        $subject = 'Contact Us';
        $body = $name."\n".$message;
        $headers = 'From:'. $email;

        mail($to, $subject, $body, $headers);
      header("location: http://localhost/schoolProject/");

        // if(mail($to, $subject, $body, $headers)){
        //     echo 'Thanks for contacting us';
        // }
        // else{
        //     echo 'Sorry an error occurred, please try again later.';
        // }
    }

    }
   

    
?>