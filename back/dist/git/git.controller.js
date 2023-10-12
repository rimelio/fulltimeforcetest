"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitController = void 0;
const common_1 = require("@nestjs/common");
const https = require('https');
let GitController = class GitController {
    getCommits(req, res) {
        console.log('llego');
        const options = {
            hostname: 'api.github.com',
            path: '/repos/rimelio/Intro/commits',
            OAUth: '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',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
            },
        };
        https.get(options, apiResponse => {
            apiResponse.pipe(res);
        }).on('error', error => {
            console.log(error);
            res.status(500).send('Something went wrong!');
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('Access-Control-Allow-Origin', 'http://localhost:4200'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GitController.prototype, "getCommits", null);
GitController = __decorate([
    (0, common_1.Controller)('git')
], GitController);
exports.GitController = GitController;
//# sourceMappingURL=git.controller.js.map