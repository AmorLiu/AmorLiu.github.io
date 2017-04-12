/**
 * Created by xzk on 2017/2/6.
 */
window.onload = function () {
    /*****单击显示汉堡包菜单*****/
    var hanbergButton = document.getElementById('hanbergButton');
    var navCover = document.getElementById('navCover');
    navCover.show = false;
    hanbergButton.onclick = function () {
        if (!navCover.show) {
            navCover.style.display = 'block';
            navCover.show = !navCover.show;
        } else {
            navCover.style.display = 'none';
            navCover.show = !navCover.show;
        }
    }
    /*****切换banner文字说明*****/
    //实时确定宽高
    var bannerText = document.getElementById('bannerText');
    var bannerTextUl = bannerText.getElementsByTagName('ul')[0];
    var bannerTextLi = bannerTextUl.getElementsByTagName('li');
    var textUl = document.getElementById('textUl');
    bannerTextUl.style.width = parseFloat(getComputedStyle(bannerText).width) + 'px';
    for (var i = 0; i < bannerTextLi.length; i++) {
        bannerTextLi[i].style.width = parseFloat(getComputedStyle(bannerText).width) + 'px';
    }
    window.onresize = function () {
        bannerTextUl.style.width = parseFloat(getComputedStyle(bannerText).width) + 'px';
        for (var i = 0; i < bannerTextLi.length; i++) {
            bannerTextLi[i].style.width = parseFloat(getComputedStyle(bannerText).width) + 'px';
        }
    }
    //自动播放
    var timer = null;
    var num = 0;
    var prevText = bannerTextLi[0];
    bannerTextLi[0].style.opacity = 1;
    clearInterval(timer);
    timer = setInterval(autoPlay, 2000);
    textUl.onmouseover = function () {
        clearInterval(timer);
    }
    textUl.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(autoPlay, 2000)
    }
    function autoPlay() {
        num++;
        if (num == bannerTextLi.length) {
            num = 0;
        }
        move(bannerTextUl, {opacity: 0.4}, 100, 'linear', function () {
            bannerTextUl.style.opacity = 0.52;
        })
        move(bannerTextLi[num], {opacity: 1}, 300, 'linear')
        move(prevText, {opacity: 0}, 300, 'linear')
        prevText = bannerTextLi[num];
    }
    //单击上一页下一页
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    prevBtn.onclick = function () {
        clearInterval(timer);
        num--;
        if(num<0){
            num = bannerTextLi.length -1;
        }
        move(bannerTextUl, {opacity: 0.4}, 100, 'linear', function () {
            bannerTextUl.style.opacity = 0.52;
        });
        move(bannerTextLi[num], {opacity: 1}, 300, 'linear')
        move(prevText, {opacity: 0}, 300, 'linear')
        prevText = bannerTextLi[num];
        timer = setInterval(autoPlay,2000);
    };
    nextBtn.onclick = function () {
        clearInterval(timer);
        autoPlay();
        timer = setInterval(autoPlay,2000);
    }
    //懒加载
    function lazyLoad (obj,className){
        var iScrollTop  = document.body.scrollTop || document.documentElement.scrollTop;
        var seeY = window.innerHeight || document.documentElement.clientHeight;
        var iTop = getObjTop(obj);
        if(iTop - iScrollTop < seeY){
            addClass(obj,className)
        }
    }
    function getObjTop(obj){
        var iTop = obj.offsetTop;
        if(obj.offsetParent){
            obj=obj.offsetParent;
            iTop += obj.offsetTop;
        }
        return iTop;
    }
    var imgs01 = document.getElementById('imgs01');
    var imgs02 = document.getElementById('imgs02');
    var imgs03 = document.getElementById('imgs03');
    window.onscroll = function () {
        lazyLoad(imgs01,'sideInLeft')
        lazyLoad(imgs02,'sideInCenter')
        lazyLoad(imgs03,'sideInRight')
    }
    
    var btn = document.getElementById('navButton');
    var btn1 = btn.getElementsByTagName('button')[0];
    var bd = document.getElementById('Bdlvp1');
    var bd1 = document.getElementById('Bdlvp');
    var img = document.getElementsByClassName('img1')[0];
    var CU_inp3 = document.getElementsByClassName('CU_inp3')[0];
    btn1.onclick = function(){
    	bd1.style.display = 'block';
    	bd.style.display = 'block';
    	
    	
    }
    CU_inp3.onclick = img.onclick = function(){
    	bd1.style.display = 'none';
    	bd.style.display = 'none';
    }
    
    //yu
    var items = ['item1','item2','item3'];
    	var lists = document.getElementsByClassName('list')[0].children;
    	var timer = null;
    	var it_index = 0;
    	for(var i=0;i<items.length;i++){
    		lists[i].onmouseenter = document.getElementsByClassName(items[i])[0].onmouseenter = function(){
    			clearInterval(timer);
    		}
    		lists[i].onmouseleave = document.getElementsByClassName(items[i])[0].onmouseleave = function(){
    			item_fun();
    		}
    	}
    	function item_fun(){
    		timer = setInterval(function(){
    			for(var i=0;i<items.length;i++){
    				var its = document.getElementsByClassName(items[i])[0];
					its.style.display = 'none';
    				lists[i].style.backgroundColor = '#fff';
    			}
    			if(it_index<2)
    				it_index++;
    			else
    				it_index = 0;
    			lists[it_index].style.backgroundColor = '#E3535D';
    			var it_inx = document.getElementsByClassName(items[it_index])[0];
    			it_inx.style.display = 'block';
    		},2000);
    	}
    	item_fun();
    	var skills = document.getElementsByClassName('skills')[0].getBoundingClientRect().top;
    	var ser = document.getElementsByClassName('ser')[0].getBoundingClientRect().top;
    	var item = document.getElementsByClassName('items')[0].getBoundingClientRect().top;
    	var w = window.innerHeight;
    	window.onscroll = function(){
    		var p = window.pageYOffset;
    		if(skills+200<w+p && skills){
    			move_fun(document.getElementsByTagName('h2')[0]);
    			skills = 0;
	    	}
	    	if(ser+200<w+p && ser){
	    		move_fun(document.getElementsByTagName('h2')[1]);
	    		ser = 0;
	    	}
	    	if(item+200<w+p && item){
	    		move_fun(document.getElementsByTagName('h2')[2]);
	    		item = 0;
	    	}
    	}
    	function move_fun(obj){
    		var timer = setInterval(function(){
    			if(obj.offsetTop>=0){
    				clearInterval(timer);
    			}else{
    				obj.style.top = obj.offsetTop+2+'px';
    			}
    		},20);
    	}
    	//xu
    	var html = document.documentElement;
            var hWidth = html.getBoundingClientRect().width;
            html.style.fontSize = hWidth/85.375+ "px";
        var dots=document.querySelectorAll("#dot ol")
var boxs=document.querySelectorAll('#boxs li')
var n=0;
setInterval(function(){
for(var i=0;i<dots.length;i++){
	dots[i].className=" ";	
	}
for(var i=0;i<boxs.length;i++){
	fn1(boxs[i]);
}	
  dots[n].className="active";
  n++;
  if(n>2){
   n=0
  }
},3000)
function fn1(a){
	var Divs=a.querySelectorAll('div');
	for(var i=0; i<Divs.length;i++){
	Divs[i].className=" ";		
}	
	Divs[n].className='active';	
}


var lis=document.querySelectorAll('#photoWall ul li');
var alls=document.querySelectorAll('.all');
for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		for(var j=0;j<lis.length;j++){
			lis[j].className='';
			alls[j].className='.all';
		}
		this.className="active";
		alls[this.index].className+=' active';
	}
}
//liu
var faq=document.getElementsByClassName('faq')[0];
		var faqA=faq.getElementsByTagName('a')[0];
		var faqU=faq.getElementsByTagName('ul')[0];
		var faqLi=faqU.getElementsByTagName('li')[0];
		var iframe=faq.getElementsByClassName('iframe')[0];
		faqA.off=true;
		faqA.onclick=function(){
			if(faqA.off){
				faqLi.style.display='block';
			move(iframe,{height:350},500,'linear',function(){
				faqA.off=false;
			});
			}else{
				

move(iframe,{height:0},500,'linear',function(){
					faqLi.style.display='none';
					faqA.off=true;
				});
			}
			return false;
		}
		// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(116.417854,39.921988);
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);              // 将标注添加到地图中
	map.centerAndZoom(point, 15);
	var opts = {
	  width : 200,     // 信息窗口宽度
	  height: 100,     // 信息窗口高度
	  title : "海底捞王府井店" , // 信息窗口标题
	  enableMessage:true,//设置允许信息窗发送短息
	  message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
	}
	var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象 
	marker.addEventListener("click", function(){          
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	});
}

