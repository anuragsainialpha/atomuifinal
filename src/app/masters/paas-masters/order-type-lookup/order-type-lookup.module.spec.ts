import { OrderTypeLookupModule } from './order-type-lookup.module';

describe('OrderTypeLookupModule', () => {
  let orderTypeLookupModule: OrderTypeLookupModule;

  beforeEach(() => {
    orderTypeLookupModule = new OrderTypeLookupModule();
  });

  it('should create an instance', () => {
    expect(orderTypeLookupModule).toBeTruthy();
  });
});
