import { MtTruckModule } from './mt-truck.module';

describe('MtTruckModule', () => {
  let mtTruckModule: MtTruckModule;

  beforeEach(() => {
    mtTruckModule = new MtTruckModule();
  });

  it('should create an instance', () => {
    expect(mtTruckModule).toBeTruthy();
  });
});
