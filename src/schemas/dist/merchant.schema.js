"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MerchantSchema = exports.Merchant = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var Merchant = /** @class */ (function () {
    function Merchant() {
    }
    __decorate([
        mongoose_1.Prop()
    ], Merchant.prototype, "name");
    __decorate([
        mongoose_1.Prop({ type: Number, unique: true, required: true })
    ], Merchant.prototype, "storeId");
    __decorate([
        mongoose_1.Prop()
    ], Merchant.prototype, "accessToken");
    Merchant = __decorate([
        mongoose_1.Schema()
    ], Merchant);
    return Merchant;
}());
exports.Merchant = Merchant;
exports.MerchantSchema = mongoose_1.SchemaFactory.createForClass(Merchant);
