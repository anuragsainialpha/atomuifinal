import { MtSapTruckTypeModule } from './mt-sap-truck-type.module';

describe('MtSapTruckTypeModule', () => {
  let mtSapTruckTypeModule: MtSapTruckTypeModule;

  beforeEach(() => {
    mtSapTruckTypeModule = new MtSapTruckTypeModule();
  });

  it('should create an instance', () => {
    expect(mtSapTruckTypeModule).toBeTruthy();
  });
});
