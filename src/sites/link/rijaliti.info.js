$.register({
  rule: 'http://rijaliti.info/*.php',
  ready: function () {
    'use strict';

    var a = $('#main td[align="center"] a');
    return a.href.link();
  },
});
