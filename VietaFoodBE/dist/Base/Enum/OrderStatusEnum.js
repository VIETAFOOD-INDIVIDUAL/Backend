"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusEnum = void 0;
var OrderStatusEnum;
(function (OrderStatusEnum) {
    OrderStatusEnum[OrderStatusEnum["Unpaid"] = 0] = "Unpaid";
    OrderStatusEnum[OrderStatusEnum["Paid"] = 1] = "Paid";
    OrderStatusEnum[OrderStatusEnum["Shipping"] = 2] = "Shipping";
    OrderStatusEnum[OrderStatusEnum["Delivered"] = 3] = "Delivered";
    OrderStatusEnum[OrderStatusEnum["Deleted"] = 4] = "Deleted";
})(OrderStatusEnum || (exports.OrderStatusEnum = OrderStatusEnum = {}));
//# sourceMappingURL=OrderStatusEnum.js.map