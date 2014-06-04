//(function (window) {
//  'use strict';
  
  function Controller() {
  	  this.name = 'App_Controller';
  }
  
  Controller.prototype._createObjectURL = function( blob ) {
    var objURL = URL.createObjectURL(blob);
    return objURL;
  };
  
  //
  Controller.prototype._requestRemoteImageAddElem = function(imageUrl, element, s_id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imageUrl);
    xhr.responseType = 'blob';
    xhr.onload = function() {
      var img = document.createElement('img');
      img.setAttribute('data-src', imageUrl);
      img.setAttribute('id', s_id);
      img.className = 'icon';
      var objURL = this._createObjectURL(xhr.response);
      img.setAttribute('src', objURL);
      element.appendChild(img);
      return img;
    }.bind(this);
    xhr.send();
  };

  Controller.prototype.tstfunc = function( ) {
  	  console.log('tst_func');
  };
	
//
//function
//

 
 