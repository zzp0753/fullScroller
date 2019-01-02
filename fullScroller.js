

var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var isFirefox = userAgent.indexOf("Firefox") > -1;

var arr = document.getElementsByClassName('full-screen');
for(var i=0;i<arr.length;i++){
    arr[i].style.height = document.documentElement.clientHeight+'px';
    arr[i].style.width = '100%';
}


var op = function(event) {
    event = event || window.event;
    //var direction = detail > 0 ? 'Up' : 'Down';
    var step = document.documentElement.clientHeight;         //可视区高度
    if(isFirefox){
        var cur_top = Math.floor(window.scrollY);//已滚的高度
        var ed = event.detail;
    } else{
        var cur_top = Math.floor(document.documentElement.scrollTop);//已滚的高度
        var ed = 0 - event.wheelDelta;
    }

    
    //监听页面位置，通过cur_top可控制DOM行为
    
    
    
    var direction = 0;

    if(ed>0){
        direction = 1;
    }
    else if(ed<0){
        direction = -1;
    }
    var height = direction * step + cur_top; 
    var x_height = Math.round(height/step)*step;    //滚过整数倍的可视区大小

    var sc_index = cur_top;
    function getScroll_po(){
        // console.log("x_height:"+x_height+"  cur_top:"+cur_top+"  sc_index:"+sc_index)
        if(sc_index<x_height){

            if(sc_index+15>x_height){
                document.getElementsByTagName('html')[0].scrollTop = x_height;
                document.getElementsByTagName('body')[0].scrollTop = x_height;
            }
            else{
                document.getElementsByTagName('html')[0].scrollTop = sc_index;
                document.getElementsByTagName('body')[0].scrollTop = sc_index;
            }
        }
        sc_index = sc_index + 15;
        if(sc_index>x_height){
            // console.log("stop Interval01")
            clearInterval(pos_interval);
        }
    }
    function getScroll_na(){
        // console.log("x_height:"+x_height+"  cur_top:"+cur_top+"  sc_index:"+sc_index)
        if(sc_index>x_height){
            if(sc_index-15<x_height){
                document.getElementsByTagName('html')[0].scrollTop = x_height;
                document.getElementsByTagName('body')[0].scrollTop = x_height;
            }
            else{
                document.getElementsByTagName('html')[0].scrollTop = sc_index;
                document.getElementsByTagName('body')[0].scrollTop = sc_index;
            }
            
        }
        sc_index = sc_index - 15;
        if(sc_index<x_height){
            // console.log("stop Interval02")
            clearInterval(nag_interval);
        }
    }

    if(x_height > cur_top){     
        var pos_interval = setInterval(getScroll_po,1); 
    }
    else if(x_height < cur_top){
        var nag_interval = setInterval(getScroll_na,1);
    }
    return false;  
}

if(document.addEventListener){  
    document.addEventListener('DOMMouseScroll',op ,false);  
}//火狐  
// window.onmousewheel=document.onmousewheel=fn;//IE/Opera/Chrome  
document.documentElement.onmousewheel = op;