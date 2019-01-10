// 工具集

/**
 * 判断字符串是否为空
 * @param {要判断的字符串} str 
 */
function isEmptyString(str){
    //空判断
    if(str == null){
        return true;
    }

    //空值判断
    let reg = new RegExp(" ", "g");
    let length = str.replace(reg, "").length;
    if(length == 0){
        return true;
    }

    return false;
}