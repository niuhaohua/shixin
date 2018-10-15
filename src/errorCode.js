//返回码错误提示
function errorCodeAlert(code) {
    let message = '系统繁忙'
    switch (code) {
      case 2000:
        message = '系统繁忙'
        break
      case 1001:
        message = '缺失被执行人姓名'
        break;
      case 1002:
        message = '请输入正确的身份证号'
        break;
      case 1001:
        message = '请输入正确的省份'
        break;
      case 1100:
        message = '暂无相关数据'
        break;
    }
    return message
  }

  export default {
    errorCodeAlert: function(code){return errorCodeAlert(code)}
  }