<?php

/**
 * Add new appointment
 *
 * @param $databaseLink
 * @param array $formsData
 * @return boolean
 */
function addNewAppointment($formsData, $databaseLink)
{
    // var_dump($formsData['name']);
    $a = '3';
    $sql = "
        INSERT INTO
            `users` (`name`, `phone`, `email`, `specialization`, `service`, `doctor`, `date`, `time`)
        VALUES
            (?, '2', ?, ?, ?, ?, ?, ?)
    ";
    $stmt = mysqli_prepare($databaseLink, $sql);
    mysqli_stmt_bind_param(
        $stmt,
        'sssssss',
        $a, 
        $formsData['email'], 
        $formsData['specialization'], 
        $formsData['service'], 
        $formsData['doctor'], 
        $formsData['date'], 
        $formsData['time']
    );
    $result = mysqli_stmt_execute($stmt);
    return $result;
}

;
