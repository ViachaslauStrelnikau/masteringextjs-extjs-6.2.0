<?php
/**
 * Created by IntelliJ IDEA.
 * User: Odmin
 * Date: 22.08.2018
 * Time: 13:58
 */
session_start(); // #1
$_SESSION = array(); // #2
session_destroy(); // #3
$result = array(); // #4
$result['success'] = true;
$result['msg'] = 'logout';
echo json_encode($result); // #5