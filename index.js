// Copyright 2014 Technical Machine, Inc. See the COPYRIGHT
// file at the top-level directory of this distribution.
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://www.apache.org/licenses/LICENSE-2.0> or the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>, at your
// option. This file may not be copied, modified, or distributed
// except according to those terms.

(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    define(['./lib/parser', './lib/serializer'], factory);
  } else {
    module.exports = factory(require('./lib/parser'), require('./lib/serializer'));
  }
}(this, function(PacketParser, PacketBuilder) {
    
    return {
        parse: PacketParser.parse,
        parseLE: PacketParser.parseLE,
        parseBE: PacketParser.parseBE,
        serialize: PacketBuilder.serialize,
        
        // For testing only
        split: PacketParser.split
    }
    
}));