import { MtTruckTypeModule } from './mt-truck-type.module';

describe('MtTruckTypeModule', () => {
  let mtTruckTypeModule: MtTruckTypeModule;

  beforeEach(() => {
    mtTruckTypeModule = new MtTruckTypeModule();
  });

  it('should create an instance', () => {
    expect(mtTruckTypeModule).toBeTruthy();
  });
});
