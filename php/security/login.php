<?php
require("../db/db.php"); // #1
require("PassHash.php"); // #2
session_start();         // #3
$userName = $_POST['user']; // #4
$pass = $_POST['password']; // #5
$userName = stripslashes($userName); // #6
$pass = stripslashes($pass);         // #7
$userName = $mysqli->real_escape_string($userName); // #8
$sql = "SELECT * FROM USER WHERE userName='$userName'"; // #9
if ($resultDb = $mysqli->query($sql)) { //#10
  $count = $resultDb->num_rows; //#11
  if($count==1){ //#12
        $record = $resultDb->fetch_assoc(); //#13
         //#14
        if (PassHash::check_password($record['password'],$pass)){
            $_SESSION['authenticated'] = "yes"; //#15
            $_SESSION['username'] = $userName; //#16
             $result['success'] = true; //#17
                        $result['msg'] = 'User authenticated!'; //#18
                    } else{
                        $result['success'] = false; //#19
                        $result['msg'] = 'Incorrect password.'; //#20
                    }
              } else {
                $result['success'] = false; //#21
                $result['msg'] = 'Incorrect user or password.'; //#22
              }
              $resultDb->close(); //#23
            }

/* close connection */
$mysqli->close();

//JSON encoding
echo json_encode($result);
?>