<?php
/**
 * Created by PhpStorm.
 * User: muhammet.dere
 * Date: 24.10.2016
 * Time: 13:59
 */
//

header("Content-type: text/json; Charset=UTF-8");

/** Toplu Data Çekme
 *  grafiği oluşturan datalar çekiliyor
 */

$aurl = "http://api.alnusforex.com/authenticate";
$params = array(
    "client_id" => "1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4",
    "client_secret" => "4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k",
    "username" => "admin",
    "password" => "Alnus2016__",
    "grant_type" => "password",
);
$curl = curl_init($aurl);
curl_setopt($curl, CURLOPT_HEADER, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_HEADER, 'Content-Type: application/x-www-form-urlencoded');
$postData = "";
foreach ($params as $k => $v) {
    $postData .= $k . '=' . urlencode($v) . '&';
}

$postData = rtrim($postData, '&');

curl_setopt($curl, CURLOPT_POSTFIELDS, $postData);


$json_response = curl_exec($curl);

$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

if ($status != 200) {
    throw new Exception("Beklenmedik Hata");
}
curl_close($curl);

$Jres = json_decode($json_response);
// Token
$tokenRes = $Jres->access_token;

/** Açılış datası urli OR
 *  Anlık data urli
 *  belirleniyor
 */
if(isset($_GET['period'])){
    $url = "http://api.alnusforex.com/mt/parites/".$_GET['parite']."/history?period=".$_GET['period']."&from=".$_GET['from'];
}else{

    $paritele = explode(',', $_GET['parite']);

    //echo var_dump($paritele);exit;

    if(count($paritele) > 1){

        foreach ($paritele as $item){
            $url[] = "http://api.alnusforex.com/mt/parites/".$item."/price";
        }
    }else{
        $url = "http://api.alnusforex.com/mt/parites/".$_GET['parite']."/price";
    }


}


function postdata($url = NULL, $token)
{
    $ch = curl_init($url);
//        $postvars = '';
//        foreach($fields as $key => $value) {
//            $postvars .= $key . "=" . $value . "&";
//        }

    $headers = array('Authorization: Bearer ' . $token);


    $options = array(
        CURLOPT_HEADER => false,
        CURLINFO_HEADER_OUT => true,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_VERBOSE => true,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_POST => false
    );

    //$options[CURLOPT_POSTFIELDS] = $postvars;

    curl_setopt_array($ch, $options);

    $response = curl_exec($ch);
    curl_close($ch);

    return ($response);
}

//echo json_encode(postdata($url, $tokenRes), JSON_UNESCAPED_UNICODE);

if(count($url) > 1){
    foreach ($url as $u){
        $result[] = postdata($u, $tokenRes);

    }

    $resultJson = "[";
    $virgul = "";

    foreach ($result as $r){

        $resultJson .= $virgul.$r;
        $virgul = ",";
    }

    $resultJson .= "]";

    echo $resultJson;


}else{
    $result = postdata($url, $tokenRes);

    echo $result;
}