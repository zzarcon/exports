'use strict';

module.exports = function (options) {
  var module = options.module;
  var name = options.name; 
  var definition = options.definition;

	if (typeof module !== 'undefined' && module.exports) {
    // CommonJS
    module.exports = definition();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(definition);
  } 

  if (typeof window != 'undefined') {
    // Global Variables
    window[name] = definition();
  }
};