<?php

include 'config.php';

$data = json_decode(file_get_contents('php://input'), true);

$row = $data['row'];
$rowperpage = $data['rowperpage'];

$query = 'SELECT * FROM posts LIMIT '.$row.','.$rowperpage;
$result = mysqli_query($con,$query);

$response_arr = array();

while($datarow = mysqli_fetch_assoc($result)){

   $id = $datarow['id'];
   $title = $datarow['title'];
   $content = $datarow['content'];
   $img = $datarow['img'];

   $response_arr[] = array(
     'id'=>$id,
     'title'=>$title,
     'content'=>$content,
     'img'=>$img
   );

}

echo json_encode($response_arr);
exit;
