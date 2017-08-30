function getStyle (obj,name) {
		if(obj.currentStyle){
				return obj.currentSytle[name];
			}else{
				return getComputedStyle(obj,false)[name];
			}
		}
/////////////获取css样式的属性////////////兼容判断////////////
function getByClass(oParent, sClass)
	{
		var aEle=oParent.getElementsByTagName('*');
		var aResult=[];
		
		for(var i=0;i<aEle.length;i++)
		{
			if(aEle[i].className==sClass)
			{
				aResult.push(aEle[i]);
			}
		}
		
		return aResult;
	}
///////////遍历某组DOM下的节点CLASS为某个值的函数////////////
function startMove (obj,attr,iTarget,fnEnd) {
		clearInterval(obj.timer);
		obj.timer=setInterval(function  () {
			var cur=0;
			if(attr=='opacity'){
				cur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				cur=parseInt(getStyle(obj,attr));
				};
			

				///四舍五入
			var speed=(iTarget-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			///////////获取速度（变化量的值）////////
			if(cur==iTarget){
				clearInterval(obj.timer);
				if(fnEnd)fnEnd();
			}else{
					if(attr=='opacity'){
						obj.style.filter='alpha(opacity:'+(cur+speed)+')';
						obj.style.opacity=(cur+speed)/100;
						
					}else{
						obj.style[attr]=cur+speed+'px';
					}
				}
		
		},30);
	}
