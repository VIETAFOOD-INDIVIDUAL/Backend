import { Module } from "@nestjs/common";
import { ProductController } from "src/Controllers/ProductController";
import { DIService } from "./DIService";
import { OrderController } from "src/Controllers/OrderController";

@Module({
    imports:[DIService],
    controllers: [
        ProductController,
        OrderController
    ]
})
export class DIController{}
