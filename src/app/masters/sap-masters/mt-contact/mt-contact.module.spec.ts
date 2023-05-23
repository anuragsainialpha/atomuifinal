import { MtContactModule } from './mt-contact.module';

describe('MtContactModule', () => {
  let mtContactModule: MtContactModule;

  beforeEach(() => {
    mtContactModule = new MtContactModule();
  });

  it('should create an instance', () => {
    expect(mtContactModule).toBeTruthy();
  });
});
