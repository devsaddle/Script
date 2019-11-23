/**
 * @supported 03D5ABC3238C 64F8BE5BA1E7
 */

let body = $response.body
body=JSON.parse(body)
delete body['ad_info']
body['data'].forEach((element, index)=> {
    if(element['author']['name']=="盐选推荐"){ 
          body['data'].splice(index,1)  
     }
 })
body=JSON.stringify(body)
$done({body})