import { Module } from "@nestjs/common";
import { AutoMapperModule } from "src/Tool/AutoMapper";

@Module({
    imports: [
        AutoMapperModule,
    ],
    providers: [
        AutoMapperModule,
    ],
    exports: [
        AutoMapperModule,
    ],
})
export class DependencyInjectionModule {}