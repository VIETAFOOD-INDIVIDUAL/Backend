import { Module } from "@nestjs/common";
import { ProductController } from "src/Controllers/ProductController";
import { DIService } from "./DIService";

@Module({
    imports:[DIService],
    controllers: [
        ProductController
    ]
})
export class DIController{}
