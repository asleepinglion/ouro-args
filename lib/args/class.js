"use strict";

var SuperJS = require('superjs');
var minimist = require('minimist');

module.exports = SuperJS.Class.extend({

  _metaFile: function () {
    this._super();
    this._loadMeta(__filename);
  },

  init: function() {

    //call parent method passing any arguments
    this._super.apply(this, arguments);

    //parse the arguments and store them locally
    this.args = minimist(process.argv);

    //shift off the executable
    this.executable = this.args._.shift();

    //shift off the command used
    this.command = this.args._.shift();
  },

  get: function() {

    //return the parsed arguments object
    return this.args;
  }

});
