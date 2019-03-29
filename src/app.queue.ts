import { BullQueue, BullQueueProcess } from '@anchan828/nest-bull';
import { Job } from 'bull';
import { APP_QUEUE } from './app.constants';
import { AppService } from './app.service';

@BullQueue({
  name: APP_QUEUE,
  options: {
    redis: {
      db: 3,
    },
  },
  extra: {
    defaultJobOptions: {
      setTTLOnComplete: 300,
    },
  },
})
export class AppQueue {
  constructor(private readonly service: AppService) {}

  // processor

  @BullQueueProcess({})
  public async process(job: Job) {
    return this.service.root();
  }

  // // events
  //
  // @BullQueueEventError()
  // public async error(error: Error) {
  //   console.error('error', error);
  // }
  // @BullQueueEventWaiting()
  // public async waiting(jobId: JobId) {
  //   console.log('wating', jobId);
  // }
  // @BullQueueEventActive()
  // public async active(job: Job, jobPromise: Promise<any>) {
  //   console.log('active', job.id);
  // }
  // @BullQueueEventStalled()
  // public async stalled(job: Job) {
  //   console.log('stalled', job.id);
  // }
  // @BullQueueEventProgress()
  // public async progress(job: Job, progress: number) {
  //   console.log('progress', job.id, progress);
  // }
  // @BullQueueEventCompleted()
  // public async completed(job: Job, result: any) {
  //   console.log('completed', job.id, result);
  // }
  // @BullQueueEventFailed()
  // public async failed(job: Job, error: Error) {
  //   console.error('failed', job.id, error);
  // }
  // @BullQueueEventPaused()
  // public async paused() {
  //   console.log('paused');
  // }
  // @BullQueueEventResumed()
  // public async resumed(job: Job) {
  //   console.log('resumed', job.id);
  // }
  // @BullQueueEventCleaned()
  // public async cleaned(job: Job, type: string) {
  //   console.log('cleaned', job.id, type);
  // }
  // @BullQueueEventDrained()
  // public async drained() {
  //   console.log('drained');
  // }
  // @BullQueueEventRemoved()
  // public async removed(job: Job) {
  //   console.log('removed', job.id);
  // }
  //
  // // global events
  //
  // @BullQueueEventGlobalError()
  // public async globalError(error: Error) {
  //   console.error('global error', error);
  // }
  // @BullQueueEventGlobalWaiting()
  // public async globalWaiting(jobId: JobId) {
  //   console.log('global wating', jobId);
  // }
  // @BullQueueEventGlobalActive()
  // public async globalActive(jobId: JobId) {
  //   console.log('global active', jobId);
  // }
  // @BullQueueEventGlobalStalled()
  // public async globalStalled(jobId: JobId) {
  //   console.log('global stalled', jobId);
  // }
  // @BullQueueEventGlobalProgress()
  // public async globalProgress(jobId: JobId, progress: number) {
  //   console.log('global progress', jobId, progress);
  // }
  // @BullQueueEventGlobalCompleted()
  // public async globalCompleted(jobId: JobId, result: any) {
  //   console.log('global completed', jobId, result);
  // }
  // @BullQueueEventGlobalFailed()
  // public async globalFailed(jobId: JobId, error: Error) {
  //   console.error('global failed', jobId, error);
  // }
  // @BullQueueEventGlobalPaused()
  // public async globalPaused() {
  //   console.log('global paused');
  // }
  // @BullQueueEventGlobalResumed()
  // public async globalResumed(jobId: JobId) {
  //   console.log('global resumed', jobId);
  // }
  // @BullQueueEventGlobalCleaned()
  // public async globalCleaned(jobId: JobId, type: string) {
  //   console.log('global cleaned', jobId, type);
  // }
  // @BullQueueEventGlobalDrained()
  // public async globalDrained() {
  //   console.log('global drained');
  // }
  // @BullQueueEventGlobalRemoved()
  // public async globalRemoved(jobId: JobId) {
  //   console.log('global removed', jobId);
  // }
}
