$.register({
  rule: {
    host: /^dikit\.in$/,
  },
  ready: function () {
    'use strict';
    $.removeNodes('iframe');

    var a = $('.disclaimer a');
    return a.href.link();
  },
});
