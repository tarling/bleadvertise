var isNode = typeof Buffer !== "undefined";

if (isNode)
{
  module.exports = {
    makeBuffer: function(length) {
      return new Buffer(length);
    },
    isBuffer: function(obj) {
        return Buffer.isBuffer(obj);
    },
    copy: function(sourceBuffer, targetBuffer, targetStart, sourceStart, sourceEnd) {
      sourceBuffer.copy(targetBuffer, targetStart, sourceStart, sourceEnd);
    },
    readUInt8: function(arr, offset) {
      return arr.readUInt8(offset);
    },
    readInt8: function(arr, offset) {
      return arr.readInt8(offset);
    },

  }
} else {
  module.exports = {
    makeBuffer: function(length) {
      return new Uint8Array(length)
    },
    isBuffer: function(obj) {
        return obj.byteLength !== undefined;
    },
    copy: function(sourceBuffer, targetBuffer, targetStart, sourceStart, sourceEnd) {
      var slice = sourceBuffer.slice(sourceStart, sourceEnd);
      targetBuffer.set(slice, targetStart);
    },
    readUInt8: function(arr, offset) {
      return new DataView(arr.buffer).getUint8(offset);
    },
    readInt8: function(arr, offset) {
      return new DataView(arr.buffer).getInt8(offset);
    }
  }
}
