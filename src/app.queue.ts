import { BullQueue, BullQueueProcessor } from '@anchan828/nest-bull';
import { Job } from 'bull';
import { APP_QUEUE } from './app.constants';

@BullQueue({ name: APP_QUEUE })
export class AppQueue {
  @BullQueueProcessor()
  async process(job: Job) {
    console.log('called process', job.data);
  }
}
