<?php
include 'config.php';
include 'functions.php';

$data = json_decode(file_get_contents('php://input'), true);

$result = addNewAppointment($data, $con);

echo json_encode($data);