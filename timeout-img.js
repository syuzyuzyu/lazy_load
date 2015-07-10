(function(){
  'use strict';
  var Redirect = Redirect || {};
  Redirect = function(ele){
   this._ele = ele;
   this._interval = 3000;
   this._ele.onload = function () {
            //TODO event cancel
    };
   this._ele.onabort = this._ele.onerror = function() {
            //TODO event cancel

    };
    /*function timeout(){
        window.setTimeout(function() {
          obj.parentNode.removeChild(element) || obj.src = '';
          if(window.stop !== undefined)
          {
               window.stop();//to do?
          }
        }, this._interval);
    }*/
    function ridirect(){

    }

    /*this._ele.src = this._ele.getAttribute('data-original');
    timeout();*/
  }
  Redirect.prototype = Object.create(null, {
    constructor: {
      value: Redirect
    },
    timeout: {
      value: function() {
        console.log(this._ele.clientHeight);
        var obj = this._ele;
        window.setTimeout(function() {
            if(obj.parentNode === undefined){obj.src = '';}
            //obj.parentNode.removeChild(element) || obj.src = '';
            if(window.stop !== undefined) {
                 window.stop();//to do?
            }
        }, this._interval);
        var modosu = function(){}
        callback = function(){
            obj.parentNode.removeChild(element);
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
})();



/**
Redirect.prototype = Object.create(null, {
  constructor: {
    value: Redirect
  },
  timeout: {
    value: function() {
      console.log(this._ele.clientHeight);
      var obj = this._ele;
      window.setTimeout(function() {
          callback();
      }, this._interval);

      callback = function(){
          obj.parentNode.removeChild(element);
      }
    }
  }
});
**/
//var aa = new Redirect('/smart/shared/img/1527/smp_150625buyer_25016327_image.jpg');
