<?php
require("menuFunctions.php"); // #1
session_start(); // #2
$userName = $_SESSION['username']; // #3
$permissions = retrievePermissions($userName); // #4
$modules = retrieveModules($permissions);      // #5
$result = retrieveMenuOptions($modules, $permissions); // #6
echo json_encode(array("data" => $result));// #7