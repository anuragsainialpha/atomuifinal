import { MtLocationModule } from './mt-location.module';

describe('MtLocationModule', () => {
  let mtLocationModule: MtLocationModule;

  beforeEach(() => {
    mtLocationModule = new MtLocationModule();
  });

  it('should create an instance', () => {
    expect(mtLocationModule).toBeTruthy();
  });
});
