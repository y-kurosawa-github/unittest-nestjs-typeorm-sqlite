// seeders/user.seeder.ts
import { User } from './user.entity';
import { Repository, DataSource } from 'typeorm';

export class UserSeeder {
    public static async seed(DataSource: DataSource): Promise<void> {
        const todoRepository = DataSource.getRepository(User);

        // 初期データの投入
        await todoRepository.save([
            { name: 'Todo 1' },
            { name: 'Todo 2' },
            { name: 'Todo 3' },
        ]);
    }
}