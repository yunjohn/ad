/**
 * Quantumult X 脚本：过滤 17student 闪屏广告
 */
let body = $response.body;
try {
    let obj = JSON.parse(body);
    if (obj) {
        if (obj.data) obj.data = {};
        if (obj.showSeconds) obj.showSeconds = 0;
        if (obj.startTime) obj.startTime = 0;
        if (obj.endTime) obj.endTime = 0;
        if (obj.linkUrl) obj.linkUrl = "";
        body = JSON.stringify(obj);
    }
} catch (e) {}
$done({ body });
