import { Module } from "@nestjs/common";
import { AutoMapperModule } from "src/Tool/AutoMapper";
import { DIController } from "./DIController";

@Module({
    imports: [
        AutoMapperModule,
        DIController
    ],
    exports: [
        AutoMapperModule,
        DIController
    ],
})
export class DependencyInjectionModule {}