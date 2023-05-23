import { MtElrModule } from './mt-elr.module';

describe('MtElrModule', () => {
  let mtElrModule: MtElrModule;

  beforeEach(() => {
    mtElrModule = new MtElrModule();
  });

  it('should create an instance', () => {
    expect(mtElrModule).toBeTruthy();
  });
});
