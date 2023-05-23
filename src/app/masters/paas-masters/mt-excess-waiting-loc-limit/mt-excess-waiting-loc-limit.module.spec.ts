import { MtExcessWaitingLocLimitModule } from './mt-excess-waiting-loc-limit.module';

describe('MtExcessWaitingLocLimitModule', () => {
  let mtExcessWaitingLocLimitModule: MtExcessWaitingLocLimitModule;

  beforeEach(() => {
    mtExcessWaitingLocLimitModule = new MtExcessWaitingLocLimitModule();
  });

  it('should create an instance', () => {
    expect(mtExcessWaitingLocLimitModule).toBeTruthy();
  });
});
