"use strict";
const express = require('express');
class apiRoutesLevel2 {
    constructor() {
        this._router = express.Router();
        this._router.use((req, res, next) => {
            if (req.cookies['decodedToken'].permissions == 2) {
                next();
            }
            else {
                //user authenticated but unauthorized
                return res.status(403).json({
                    success: false,
                    status: "User unauthorized...Need level 1"
                });
            }
        });
        this._router.get('/api', function (req, res, next) {
            res.status(200).json({
                success: true,
                message: "You entered restricted area with permission 1"
            });
        });
        this._router.get('/list', function (req, res, next) {
            res.status(200).json({
                success: true,
                message: "You entered restricted area with permission 1"
            });
        });
    }
    returnRouter() {
        return this._router;
    }
}
exports.apiRoutesLevel2 = apiRoutesLevel2;
//# sourceMappingURL=apiRoutesLevel2.js.map