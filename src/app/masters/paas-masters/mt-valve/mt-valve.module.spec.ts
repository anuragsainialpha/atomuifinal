import { MtValveModule } from './mt-valve.module';

describe('MtValveModule', () => {
  let mtValveModule: MtValveModule;

  beforeEach(() => {
    mtValveModule = new MtValveModule();
  });

  it('should create an instance', () => {
    expect(mtValveModule).toBeTruthy();
  });
});
