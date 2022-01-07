"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MerchantModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var merchant_controller_1 = require("./merchant.controller");
var merchant_service_1 = require("./merchant.service");
var merchant_schema_1 = require("../schemas/merchant.schema");
var MerchantModule = /** @class */ (function () {
    function MerchantModule() {
    }
    MerchantModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: merchant_schema_1.Merchant.name, schema: merchant_schema_1.MerchantSchema },
                ]),
            ],
            controllers: [merchant_controller_1.MerchantController],
            providers: [merchant_service_1.MerchantService]
        })
    ], MerchantModule);
    return MerchantModule;
}());
exports.MerchantModule = MerchantModule;
