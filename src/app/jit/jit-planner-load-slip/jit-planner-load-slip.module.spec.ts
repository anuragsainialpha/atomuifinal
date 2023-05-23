import { JitPlannerLoadSlipModule } from './jit-planner-load-slip.module';

describe('JitPlannerLoadSlipModule', () => {
  let jitPlannerLoadSlipModule: JitPlannerLoadSlipModule;

  beforeEach(() => {
    jitPlannerLoadSlipModule = new JitPlannerLoadSlipModule();
  });

  it('should create an instance', () => {
    expect(jitPlannerLoadSlipModule).toBeTruthy();
  });
});
