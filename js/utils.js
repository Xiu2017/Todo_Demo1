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

/**
 * 根据传来的字符串设置要过滤的todo状态
 */
function setStatus(status){
    switch(status){
        case "all": 
        case "#/all":
            this.status = "all";
            break;
        case "active":
        case "#/active":
            this.status = "active";
            break;
        case "completed":
        case "#/completed":
            this.status = "completed";
            break;
        default:
            this.status = "all";
            break;
    }
}