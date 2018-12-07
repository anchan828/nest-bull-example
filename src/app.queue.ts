import { BullQueue, BullQueueProcessor } from '@anchan828/nest-bull';
import { Job } from 'bull';
import { APP_QUEUE } from './app.constants';
import { AppService } from './app.service';

@BullQueue({ name: APP_QUEUE })
export class AppQueue {
  constructor(private readonly service: AppService) {}
  @BullQueueProcessor()
  public async process(job: Job) {
    console.log('called process', job.data, this.service.root());
  }
}
