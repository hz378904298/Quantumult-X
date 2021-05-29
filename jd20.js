/*
QX:
https:\/\/api\.jd\.m\.com\/client/.action/?/functionld/=/receiveNecklaceCoupon url script-response-body https://raw.githubusercontent.com/hz378904298/Quantumult-X/main/jd20.js
MITM = api.m.jd.com
*/

let obj = JSON.parse($response.body);
obj = {
  "code": "0",
 "success": true,
 "busiCode": "0",
 "message": "成功",
 "result": {
  "necklaceCheckRes": {
   "resultCode": 2,
   "necklaceNum": 20000
  }
 },
 "lastFlag": null
};
$done({body: JSON.stringify(obj)});
