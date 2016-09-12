
var pictab=function(opt){
	var that=this;
	console.log(opt);
	var picwidth=opt.width;
	var picheight=opt.height;	
	var picnum=opt.picnum;
	var timer=null;
	var speed=opt.speed;
	var inde=0;
	that.$=function(ele){
		return document.getElementById(ele);
	},
	that.init=function(){
		var wrap=that.$('wrap');
		var ulbox=that.$('ulbox');
		var olbox=that.$('olbox');
		wrap.style.cssText="width: "+picwidth+"px;height: "+picheight+"px;"
		ulbox.style.cssText="width: "+(picwidth*picnum)+"px;height: "+picheight+"px;";
		that.tab();
	},
	that.tab=function(){
		var ollist=olbox.getElementsByTagName('li');
		clearInterval(timer);
		timer=setInterval(tabpic, speed);
		function tabpic(){
			if(inde>=picnum-1){
				inde=0;
			}else{
				inde++;	
			};
			for(var j=0;j<ollist.length;j++){
				ollist[j].className="";
				ollist[inde].className="active";
			};
			ulbox.style.left=-(inde*picwidth)+"px";
		};
		ulbox.onmouseleave=function(){
			clearInterval(timer);
			timer=setInterval(tabpic, speed);
		};
		that.clicks();
	},
	that.clicks=function(i){
		var ollist=olbox.getElementsByTagName('li');
		for(var i=0;i<ollist.length;i++){
			ollist[i].index=i;
			ollist[i].onclick=function(){
				clearInterval(timer);
				for(var j=0;j<ollist.length;j++){
					ollist[j].className="";
					this.className="active";
				}
				ulbox.style.left=-(this.index*picwidth)+"px";
			};
			
		};
	}
};
var obj=new pictab({
	"width":520,
	"height":280,
	"picnum":3,
	"speed":'2000'
});
obj.init();