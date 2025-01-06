import { Module } from "@nestjs/common";
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
// import { ProductMapper } from "src/Mapper/Product/ProductMapper";

@Module({
    imports: [
        AutomapperModule.forRoot({
            strategyInitializer: classes(),
        }),
    ],
    // providers: [ProductMapper],
    // exports: [ProductMapper]
})
export class AutoMapperModule {}