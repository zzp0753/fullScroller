var arr = $('.full-screen');
		for(var i=0;i<arr.length;i++){
			arr[i].style.height = document.documentElement.clientHeight+'px';
			arr[i].style.width = '100%';
		}

		function omw(event) {
	        //var direction = delta > 0 ? 'Up' : 'Down';
	        var step = document.documentElement.clientHeight            //可视区高度
	        var cur_top = Math.floor($(window).scrollTop());    //当前滚过的高度
	        // console.log(cur_top)
	        if(cur_top<351 || cur_top>735){
	        	console.log('2323')
	        	$('#skill-stacks').addClass('animated flipInY');
	        	setTimeout(function(){
	        		$('#skill-stacks').removeClass('flipInY');
	        	},1000);
	        }
	        console.dir(event);
	        var direction = 0;
	        if(event.detail>0){
	        	direction = 1;
	        }
	        else if(event.detail<0){
	        	direction = -1;
	        }
	        var height = direction * step + cur_top; 
	        var x_height = Math.round(height/step)*step;    //滚过整数倍的可视区大小
	        $("html, body").stop().animate({ scrollTop: x_height }, 400);    
	        return false;  
	    }

		// arr[0].style.height = arr[1].style.height;
		// arr[0].style.width = arr[1].style.width;
		    if(document.addEventListener){  
	        document.addEventListener('DOMMouseScroll',omw,false);  
	    }//火狐  
    // window.onmousewheel=document.onmousewheel=fn;//IE/Opera/Chrome  
		$(window).on('mousewheel', function(event, delta) {
	        //var direction = delta > 0 ? 'Up' : 'Down';
	        var step = document.documentElement.clientHeight            //可视区高度
	        var cur_top = Math.floor($(window).scrollTop());    //当前滚过的高度
	        console.log(cur_top)
	        if(cur_top<351 || cur_top>735){
	        	console.log('2323')
	        	$('#skill-stacks').addClass('animated flipInY');
	        	setTimeout(function(){
	        		$('#skill-stacks').removeClass('flipInY');
	        	},1000);
	        }
	        var direction = 0;
	        if(event.originalEvent.deltaY>0){
	        	direction = 1;
	        }
	        else if(event.originalEvent.deltaY<0){
	        	direction = -1;
	        }
	        var height = direction * step + cur_top; 
	        var x_height = Math.round(height/step)*step;    //滚过整数倍的可视区大小
	        $("html, body").stop().animate({ scrollTop: x_height }, 400);    
	        return false;  
	    });