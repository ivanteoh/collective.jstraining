/**
 * Created by ivan on 17/10/16.
 */
define('exercise6',[
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
/**
 * Created by ivan on 17/10/16.
 */
require([
  'exercise6'
], function() {
  'use strict';
});

define("/Users/ivan/code/training/buildout/src/collective.jstraining/collective/jstraining/exercise6/static/bundle.js", function(){});

