import { BullModule } from '@anchan828/nest-bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
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
})
export class AppModule {}
