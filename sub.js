
var mWidth_share = 800;
var mHeight_share= 600;

var mItems = new Array();

function AppShow() {
  this.name = 'AppShow';
}
AppShow.prototype.proc_init = function() {
 console.log('#proc_init');
 	var s1='http://kuc-arc-f.github.io/h5_t0604_page/img/p1.png';
 	var s2='http://kuc-arc-f.github.io/h5_t0604_page/img/p2.JPG';
 	var s3='http://kuc-arc-f.github.io/h5_t0604_page/img/p3.JPG';
 
	 var ctl = new Controller();
	 var divcont = document.querySelector('div#id-div-img');
	 var img_t= ctl._requestRemoteImageAddElem( s1, divcont ,'id_img1');
	 
	 var divcont2 = document.querySelector('div#id-div-img2');
	 var img_t= ctl._requestRemoteImageAddElem( s2, divcont2 ,'id_img1');
	 
	 var divcont3 = document.querySelector('div#id-div-img3');
	 var img_t= ctl._requestRemoteImageAddElem( s3, divcont3 ,'id_img1');
}

onload = function() {
 var app= new AppShow();
// var ctl = new Controller();
 
  app.proc_init();
};

window.addEventListener('DOMContentLoaded', function() {
console.log('web.DOMContentLoaded');
})
	
//
// function
//
