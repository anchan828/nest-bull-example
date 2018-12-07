import { BullQueueInject } from '@anchan828/nest-bull';
import { Controller, Get } from '@nestjs/common';
import { JobId, Queue } from 'bull';
import { APP_QUEUE } from './app.constants';

@Controller()
export class AppController {
  constructor(
    @BullQueueInject(APP_QUEUE)
    private readonly queue: Queue,
  ) {}

  @Get()
  async root(): Promise<JobId> {
    const job = await this.queue.add({ text: 'text' });
    return parseInt(job.id as string, 10);
  }
}
