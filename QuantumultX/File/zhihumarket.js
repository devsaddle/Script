/**
 * @supported 03D5ABC3238C 64F8BE5BA1E7 F519FA85D130
 */

let body = $response.body 
body=JSON.parse(body)
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
body=JSON.stringify(body)
$done({body})