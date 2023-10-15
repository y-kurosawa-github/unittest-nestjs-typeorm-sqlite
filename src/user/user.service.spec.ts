// user.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DataSource } from 'typeorm';

import { UserSeeder } from './user.seeder';
import { TestOrmConfig } from '../test.ormconfig';

describe('UserService', () => {
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot(TestOrmConfig),
                TypeOrmModule.forFeature([User]),
            ],
            providers: [UserService],
        }).compile();

        service = module.get<UserService>(UserService);

        // 初期データの投入
        const ds = module.get<DataSource>(DataSource);
        await UserSeeder.seed(ds);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('findAllのテスト', () => {
        it('TODOレコードを全件（3件）取得できるか', async () => {
            const todos = await service.findAll();
            expect(todos).toHaveLength(3); // テストデータのレコード数を確認
        });
    });
});