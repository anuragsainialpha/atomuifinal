import { MtCustomerShipToModule } from './mt-customer-ship-to.module';

describe('MtCustomerShipToModule', () => {
  let mtCustomerShipToModule: MtCustomerShipToModule;

  beforeEach(() => {
    mtCustomerShipToModule = new MtCustomerShipToModule();
  });

  it('should create an instance', () => {
    expect(mtCustomerShipToModule).toBeTruthy();
  });
});
