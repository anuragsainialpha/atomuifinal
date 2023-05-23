import { MtLocationBayModule } from './mt-location-bay.module';

describe('MtLocationBayModule', () => {
  let mtLocationBayModule: MtLocationBayModule;

  beforeEach(() => {
    mtLocationBayModule = new MtLocationBayModule();
  });

  it('should create an instance', () => {
    expect(mtLocationBayModule).toBeTruthy();
  });
});
