/**
 * Created by vlad on 15/09/16.
 */
;
(function () {

    'use strict';

    var express = require('express'),
        app = express();
    app.use(express.static(__dirname + '/app'));
    // app.use(express.static(path.join(__dirname, './app')));

    // app.get('*', function (req, res) {
    //     res.sendFile("/app/index.html", {"root": __dirname});
    // });
    app.listen(process.env.PORT || 3000);

}());