/**
 * Created by ivan on 17/10/16.
 */
define([
  'jquery',
  'mockup-patterns-base',
], function($, Base) {
  'use strict';

  var Pattern = Base.extend({
    name: 'exercise6',
    trigger: '.pat-exercise6',
    parser: 'mockup',
    defaults: {
    },
    init: function() {
      var that = this;
      that.$el.append(' <span>Exercise 6 was here</span>');
    }
  });

  return Pattern;
});