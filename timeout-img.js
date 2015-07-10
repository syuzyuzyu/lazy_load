(function(window, document){
  'use strict';
  //var Redirect = Redirect || {};
  var Redirect = function(ele){
   this._ele = ele;
   this.src = ele.src;
   this._interval = 1;
   this._ele.onload = function () {
            //TODO event cancel
    };
   this._ele.onabort = this._ele.onerror = function() {
            //TODO event cancel

    };
  }
  Redirect.prototype = Object.create(null, {
    constructor: {
      value: Redirect
    },
    timeout: {
      value: function() {
        console.log(this._ele.clientHeight);
        var obj = this._ele, src = this.src;
        console.log(src);
        window.setTimeout(function() {
            console.log(obj.parentNode);
            if(obj.parentNode !== undefined){obj.src = '';}
            obj.parentNode.removeChild(obj);// || obj.src = '';
            callback();
            if(window.stop !== undefined) {
                 window.stop();//to do?
            }
        }, this._interval);
        var callback = function(){
                    //TODO:imgタグのsrc属性を抜いて配置し、alt属性をだす３秒後にsrc属性をセットしレジーロードを実施
          var change_img = document.createElement('img');
          change_img.setAttribute('src', src);
          obj.appendChild(change_img);
          //obj.src(this.);
        }
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
