// data-source.ts
import { User } from "./user/user.entity";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TestOrmConfig : TypeOrmModuleOptions = {
    type: "sqlite",
    database: ":memory:",
    entities: [User],
    synchronize: true,
    dropSchema: true,
    logging: false,
    cache: false,
    name: "default",
};