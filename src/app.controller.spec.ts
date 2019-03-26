import { BullModule } from '@anchan828/nest-bull';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppQueue } from './app.queue';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let appController: AppController;
  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [
        BullModule.forRoot({
          queues: [__dirname + '/**/*.queue{.ts,.js}'],
          options: {
            redis: {
              host: '127.0.0.1',
              port: 30637,
            },
          },
        }),
      ],
      controllers: [AppController],
      providers: [AppService, AppQueue],
    }).compile();
    await app.init();
    appController = app.get<AppController>(AppController);
  });

  afterEach(async () => {
    await app.close();
  })

  describe('root', () => {
    it('should return jobID', async () => {
      await expect(appController.root()).resolves.toBeGreaterThanOrEqual(1);
    });

    it('should return jobID', async () => {
      await expect(appController.root()).resolves.toBeGreaterThanOrEqual(1);
    });
  });

  describe('root', () => {
    it('should return jobID', async () => {
      await expect(appController.root()).resolves.toBeGreaterThanOrEqual(1);
    });

    it('should return jobID', async () => {
      await expect(appController.root()).resolves.toBeGreaterThanOrEqual(1);
    });
  });
});
