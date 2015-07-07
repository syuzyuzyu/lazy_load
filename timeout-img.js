(function(){
  'use strict';
  var Redirect = Redirect || {};
  Redirect = function(ele){
   this._ele = ele;
   this._interval = 3000;
   this._ele.onload = function () {
            //TODO event cancel
    };
   this._ele.onabort = img.onerror = function() {
            //TODO event cancel

    };
    function timeout(){
        window.setTimeout(function() {
          obj.parentNode.removeChild(element) || obj.src = '';
          if(window.stop !== undefined)
          {
               window.stop();
          }
        }, this._interval);
    }
    function ridirect(){

    }

    this._ele.src = this._ele.getAttribute('data-original');
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
var aa = new Redirect('/smart/shared/img/1527/smp_150625buyer_25016327_image.jpg');
