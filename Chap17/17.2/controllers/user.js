"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.follow = void 0;
const user_1 = __importDefault(require("../models/user"));
const follow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const user = yield user_1.default.findOne({ where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id } });
        if (user) {
            yield user.addFollowing(parseInt(req.params.id, 10));
            res.send('success');
        }
        else {
            res.status(404).send('no user');
        }
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
exports.follow = follow;
