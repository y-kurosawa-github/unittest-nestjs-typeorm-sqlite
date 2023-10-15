// seeders/user.seeder.ts
import { User } from './user.entity';
import { DataSource } from 'typeorm';

export class UserSeeder {
    public static async seed(DataSource: DataSource): Promise<void> {
        const userRepository = DataSource.getRepository(User);

        // 初期データの投入
        await userRepository.save([
            { name: 'User 1' },
            { name: 'User 2' },
            { name: 'User 3' },
        ]);
    }
}