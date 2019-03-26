import { BullModule } from '@anchan828/nest-bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppQueue } from './app.queue';
import { AppService } from './app.service';

@Module({
  imports: [
    BullModule.forRoot({
      queues: [__dirname + '/**/*.queue{.ts,.js}'],
      options: {
        redis: {
          host: '127.0.0.1',
          port: 30637,
        },
      },
      extra: {
        defaultProcessorOptions: {
          concurrency: 3,
        },
        defaultJobOptions: {
          setTTLOnComplete: 30,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppQueue],
})
export class AppModule {}
