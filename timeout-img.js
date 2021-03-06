(function($, window, document){
  'use strict';
  var setting = {
    lazy_load : 'lazy-load',
    dummy_img : 'img/dummy.gif',
    interval : 1,
    class_name : 'timeout_img',
    delay_img : -200 /*If the Image is timeout, loding image is lazyload that is delay*/
  };

  var Redirect = function(ele, options){
   this._timeout = null;
   this._ele = ele;
   this._replace_img = function(){
     var change_img = document.createElement('img');
     change_img.setAttribute('data-original', ele.getAttribute('src'));
     console.log(ele.clientHeight + "_" + ele.clientWidth);
     console.log(ele.naturalWidth + "_" + ele.naturalHeight);
     if(ele.clientHeight != 0){
       change_img.setAttribute('height', ele.clientHeight);
     }
      if(ele.clientWidth != 0){
        change_img.setAttribute('width', ele.clientWidth);
      }
     change_img.setAttribute('src', setting.dummy_img);
     ele.parentNode.insertBefore(change_img,ele);
     ele.parentNode.removeChild(ele);
     return change_img;
   };
   this._ele.onload = function(){
     if(this._timeout != null){
        clearTimeout(this._timeout);
        this._timeout = null;
     }
   };
   this._ele.onabort = this._ele.onerror = function() {
     console.log('error occerd');
   };
  }
  Redirect.prototype = Object.create(Object.prototype, {
    constructor: {
      value: Redirect
    },
    timeout: {
      value: function() {
        console.log(this._ele.clientHeight);
        var obj = this._ele, replace_tag = this._replace_img, parentNode = this._ele.parentNode;
        this._timeout = window.setTimeout(function() {
            console.log($.fn.lazyload);
            console.log(obj.complete);
            if(!obj.complete){
              var new_img = replace_tag();
              obj.onabort = obj.onerror=function(){};/*clear*/
              if($.fn.lazyload !== undefined)
                    $(new_img).lazyload({threshold : setting.delay_img});
            if(window.stop !== undefined) {
                 window.stop();//to do?
            }
          }
        }, setting.interval);
      }
    }
  });
  var img_tag = document.getElementsByTagName('img');
  for (var i=0; i<img_tag.length; i++){
    if(img_tag[i].className == setting.class_name){
      new Redirect(img_tag[i]).timeout();
    }
  }
})(jQuery, window, document);
