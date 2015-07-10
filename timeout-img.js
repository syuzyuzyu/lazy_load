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
               window.stop();//to do?
          }
        }, this._interval);
    }
    function ridirect(){

    }

    this._ele.src = this._ele.getAttribute('data-original');
    timeout();
  }
})();
