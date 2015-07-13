(function(window, document){
  'use strict';
  //var Redirect = Redirect || {};
  var Redirect = function(ele){
   this._ele = ele;
   this._src = ele.src;
   this._interval = 1;
   this._replace_img = function(){
     var change_img = document.createElement('img');
     change_img.setAttribute('data-original', ele.src);
     change_img.setAttribute('height', ele.clientHeight);
     change_img.setAttribute('width', ele.clientWidth);
     return change_img;
   };
   this._ele.onload = function () {
            //TODO event cancel
    };
   this._ele.onabort = this._ele.onerror = function() {
     var node = this._ele.parentNode;
     node.insertBefore(replace_tag(),this._ele);
     node._ele.parentNode.removeChild(this._ele);
    };
  }
  Redirect.prototype = Object.create(Object.prototype, {
    constructor: {
      value: Redirect
    },
    timeout: {
      value: function() {
        console.log(this._ele.clientHeight);
        var obj = this._ele, src = this._src, replace_tag = this._replace_img;
        console.log(src);
        window.setTimeout(function() {
            console.log(obj.parentNode);
            if(obj.parentNode !== undefined){obj.src = '';}
            //obj.parentNode.removeChild(obj);// || obj.src = '';
                        //TODO:imgタグのsrc属性を抜いて配置し、alt属性をだす３秒後にsrc属性をセットしレジーロードを実施
            obj.parentNode.insertBefore(replace_tag(),obj);
            obj.parentNode.removeChild(obj);
            if(window.stop !== undefined) {
                 window.stop();//to do?
            }
        }, this._interval);
      }
    }/*,
  callback: {
      value: function(){
        console.log('startdayooooooo');
        var change_img = document.createElement('img');
        change_img.setAttribute('data-original', src);
        change_img.setAttribute('height', this._ele.clientHeight);
        change_img.setAttribute('width', this._ele.clientWidth);
        this._ele.parentNode.insertBefore(change_img,this._ele);
        this._ele.parentNode.removeChild(obj);
      }*/

  });
  var img_tag = document.getElementsByTagName('img');
  for (var i=0; i<img_tag.length; i++){
    if(img_tag[i].className == 'timeout_img'){
      new Redirect(img_tag[i]).timeout();
    }
  }
})(window, document);
