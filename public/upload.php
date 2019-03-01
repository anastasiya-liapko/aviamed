<?php

$arr = $_POST;
$arr['uploadStatus'] = 'ok';
$arr['uploadName'] = 2;

echo json_encode($arr);