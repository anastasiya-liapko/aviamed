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
    // $phone = $formsData['phone'];
    // $email = $formsData['email'];
    // $specialization = $formsData['specialization'];
    // $service = $formsData['service'];
    // $doctor = $formsData['doctor'];
    // $date = $formsData['date'];
    // $time = $formsData['time'];

    $sql = "
        INSERT INTO
            `users` (`name`, `phone`, `email`, `specialization`, `service`, `doctor`, `date`, `time`)
        VALUES
            (?, ?, ?, ?, ?, ?, ?, ?)
    ";
    $stmt = mysqli_prepare($databaseLink, $sql);
    mysqli_stmt_bind_param($stmt, 'ssssssss', $formsData['name'], $formsData['phone'], $formsData['email'], $formsData['specialization'], $formsData['service'], $formsData['doctor'], $formsData['date'], $formsData['time']);
    $result = mysqli_stmt_execute($stmt);

    return $result;
}

;
