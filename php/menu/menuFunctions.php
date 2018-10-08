<?php
function retrievePermissions($userName){
    require('../db/db.php'); // #8

    $sqlQuery = "SELECT p.menu_id menuId FROM User u "; // #9
    $sqlQuery .= "INNER JOIN permissions p ON u.group_id =  p.group_id ";
    $sqlQuery .= "INNER JOIN menu m ON p.menu_id = m.id ";
    $sqlQuery .= "WHERE u.username = '$userName' ";

    $permissions = [];

    if ($resultDb = $mysqli->query($sqlQuery)) { // #10
        while($user = $resultDb->fetch_assoc()) { // #11
            $permissions[] =  $user['menuId'];
        }
    }
    $resultDb->free(); // #12
    $mysqli->close();  // #13
    return $permissions; // #14
}

function retrieveModules($permissions){
    require('../db/db.php');
    $inClause = '(' . join(',',$permissions) . ')'; // #15
    $sqlQuery = "SELECT id, text, iconCls FROM menu WHERE menu_id  IS NULL AND id in $inClause"; // #16
    $modules = [];
    if ($resultDb = $mysqli->query($sqlQuery)) { // #17
        while($module = $resultDb->fetch_assoc()) {
            $modules[] = $module;
        }
    }
    $resultDb->free();
    $mysqli->close();
    return $modules; // #18
}
function retrieveMenuOptions($modules, $permissions){
    require('../db/db.php');
    $inClause = '(' . join(',',$permissions) . ')'; // #1
    $result = [];
    foreach ($modules as $module) { // #2
        $sqlQuery = "SELECT * FROM menu WHERE menu_id = '"; // #3
        $sqlQuery .= $module['id'] ."' AND id in $inClause";
        if ($resultDb = $mysqli->query($sqlQuery)) { // #4
            $count = $resultDb->num_rows; // #5
            if ($count > 0){ // #6
                $module['items'] = array(); // #7
                while ($item = $resultDb->fetch_assoc()) {
                    $module['items'][] = $item; // #8
                }
            }
            $result[] = $module; // #9
        }
    }
    $resultDb->close();
    $mysqli->close();
    return $result; // #10
}