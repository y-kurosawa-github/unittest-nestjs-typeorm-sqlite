// user.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DataSource, Repository } from 'typeorm';
import { UserSeeder } from './user.seeder';

describe('UserService', () => {
    let service: UserService;
    let userRepository: Repository<User>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot({
                    type: 'sqlite',
                    database: ':memory:',
                    entities: [User],
                    synchronize: true,
                    dropSchema: true, // テストの前にスキーマをドロップする。
                }),
                TypeOrmModule.forFeature([User]),
            ],
            providers: [UserService],
        }).compile();

        service = module.get<UserService>(UserService);
        userRepository = module.get<Repository<User>>(getRepositoryToken(User));

        const ds = module.get<DataSource>(DataSource);

        // 初期データの投入
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