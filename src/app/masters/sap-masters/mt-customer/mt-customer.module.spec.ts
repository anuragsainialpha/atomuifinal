import { MtCustomerModule } from './mt-customer.module';

describe('MtCustomerModule', () => {
  let mtCustomerModule: MtCustomerModule;

  beforeEach(() => {
    mtCustomerModule = new MtCustomerModule();
  });

  it('should create an instance', () => {
    expect(mtCustomerModule).toBeTruthy();
  });
});
