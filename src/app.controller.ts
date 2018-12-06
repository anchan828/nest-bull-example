import { Controller, Get, Inject } from '@nestjs/common';
import { JobId, Queue } from 'bull';
import { APP_QUEUE } from './app.constants';

@Controller()
export class AppController {
  constructor(
    @Inject(APP_QUEUE)
    private readonly queue: Queue,
  ) {}

  @Get()
  async root(): Promise<JobId> {
    const job = await this.queue.add({ text: 'text' });
    return job.id;
  }
}
