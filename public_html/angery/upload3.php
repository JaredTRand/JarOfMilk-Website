<?php
$ds          = DIRECTORY_SEPARATOR;
$storeFolder = 'uploads';
 
if (!empty($_FILES)) {
    $tempFile = $_FILES['file']['tmp_name'];
    $temp = explode(".", $_FILES["file"]["name"]);
    $targetPath = dirname( __FILE__ ) . $ds. $storeFolder . $ds;
    $newfilename = round(microtime(true)) . '.' . end($temp);
    $targetFile =  $targetPath. $newfilename;
    
    echo "aaaa";

    include 'upload4.php';
    move_uploaded_file($tempFile,$targetFile);
    
    

}
?>      