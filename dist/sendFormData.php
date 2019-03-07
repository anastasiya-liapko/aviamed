<?php
include 'config.php';
include 'functions.php';

$data = json_decode(file_get_contents('php://input'), true);

// $name=$data['name'];
// $phone=$data['phone'];
// $email=$data['email'];
// $specialization=$data['specialization'];
// $service=$data['service'];
// $doctor=$data['doctor'];
// $date=$data['date'];
// $time=$data['time'];

// $sql = "
//         INSERT INTO
//             `users` (`name`, `phone`, `email`, `specialization`, `service`, `doctor`, `date`, `time`)
//         VALUES
//             (?, ?, ?, ?, ?, ?, ?, ?)
//     ";

// mysqli_query($con,"INSERT INTO `users` (`name`, `phone`, `email`, `specialization`, `service`, `doctor`, `date`, `time`) VALUES('".$name."','".$phone."','".$email."','".$specialization."','".$service."','".$doctor."','".$date."','".$time."')");
$result = addNewAppointment($data, $con);

echo json_encode($result);