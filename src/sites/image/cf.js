$.register({
  rule: {
    host: /^www\.x45x\.info|(imadul|mypixxx\.lonestarnaughtygirls)\.com|ghanaimages\.co|imgurban\.info|d69\.in$/,
    query: /\?p[mt]=(.+)/,
  },
  start: function (m) {
    'use strict';

    return ('/?di=' + m.query[1]).image();
  },
});
