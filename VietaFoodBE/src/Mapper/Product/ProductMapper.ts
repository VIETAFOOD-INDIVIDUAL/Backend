// import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
// import { Injectable } from "@nestjs/common";
// import { createMap, Mapper, MappingProfile } from "@automapper/core";
// import { Prisma, PrismaClient } from "@prisma/client";
// import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";

// @Injectable()
// export class ProductMapper extends AutomapperProfile {
//     constructor(@InjectMapper() mapper: Mapper) {
//         super(mapper);
//     }

//     override get profile(): MappingProfile {
//         return (mapper) => {
//             createMap(mapper, Prisma.ModelName.Product, ProductResponse);
//         };
//     }
// }