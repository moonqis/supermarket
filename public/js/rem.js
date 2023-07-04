//设置宽度、字体
function remSize(){
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    //设计稿一般为750
    if(deviceWidth>=750){
        deviceWidth = 750
    }
    if(deviceWidth<=320){
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    document.querySelector('body').style.fontSize = 0.3+ 'rem'
}

remSize()

window.onresize = function(){
    remSize()
}