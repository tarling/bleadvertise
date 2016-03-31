(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    define(factory);
  } else {
    module.exports = factory();
  }
}(this, function() {

  var isNode = typeof Buffer !== "undefined";

  if (isNode)
  {
    return {
      makeBuffer: function(length) {
        return new Buffer(length);
      },
      isBuffer: function(obj) {
          return Buffer.isBuffer(obj);
      }
    }
  } else {
    return {
      makeBuffer: function(length) {
        return new Uint8Array(length)
      },
      isBuffer: function(obj) {
          return obj.hasOwnProperty("byteLength");
      }
    }
  }

}));
