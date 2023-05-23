import { MtExcessWaitingRepLimitModule } from './mt-excess-waiting-rep-limit.module';

describe('MtExcessWaitingRepLimitModule', () => {
  let mtExcessWaitingRepLimitModule: MtExcessWaitingRepLimitModule;

  beforeEach(() => {
    mtExcessWaitingRepLimitModule = new MtExcessWaitingRepLimitModule();
  });

  it('should create an instance', () => {
    expect(mtExcessWaitingRepLimitModule).toBeTruthy();
  });
});
