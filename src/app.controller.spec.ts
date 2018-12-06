import { BullModule } from '@anchan828/nest-bull';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        BullModule.forRoot({
          queues: [__dirname + '/**/*.queue{.ts,.js}'],
          options: {
            redis: {
              host: '127.0.0.1',
            },
          },
        }),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('should return jobID', async () => {
      const appController = app.get<AppController>(AppController);
      await expect(appController.root()).resolves.toBe('1');
    });
  });
});
