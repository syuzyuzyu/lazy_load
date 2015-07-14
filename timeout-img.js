(function(window, document){
  'use strict';
  //var Redirect = Redirect || {};
  var Redirect = function(ele){
   this._ele = ele;
   this._interval = 1;
   this._replace_img = function(){
     var change_img = document.createElement('img');
     change_img.setAttribute('data-original', ele.src);
     change_img.setAttribute('height', ele.clientHeight);
     change_img.setAttribute('width', ele.clientWidth);
     change_img.setAttribute('src', '');
     ele.parentNode.insertBefore(change_img,ele);
     ele.parentNode.removeChild(ele);
     //return change_img;
   };

    /*this._ele.onload = function () {
        console.log('success');
     };*/
   this._ele.onabort = this._ele.onerror = function() {
     console.log('error occerd');
     this.setAttribute('data-original', ele.src);
     this.setAttribute('height', ele.clientHeight);
     this.setAttribute('width', ele.clientWidth);
     this.src = '';
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
        window.setTimeout(function() {
            console.log(obj.parentNode);
            if(parentNode !== undefined){obj.src = '';}
            //obj.parentNode.removeChild(obj);// || obj.src = '';
                        //TODO:imgタグのsrc属性を抜いて配置し、alt属性をだす３秒後にsrc属性をセットしレジーロードを実施
                        replace_tag();
                        obj.onabort = obj.onerror=function(){};

            //parentNode.insertBefore(replace_tag(),obj);
            //parentNode.removeChild(obj);
            if(window.stop !== undefined) {
                 window.stop();//to do?
            }
        }, this._interval);
      }
    }
  });
  var img_tag = document.getElementsByTagName('img');
  for (var i=0; i<img_tag.length; i++){
    if(img_tag[i].className == 'timeout_img'){
      new Redirect(img_tag[i]).timeout();
    }
  }
})(window, document);
