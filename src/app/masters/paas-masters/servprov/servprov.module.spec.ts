import { ServprovModule } from './servprov.module';

describe('ServprovModule', () => {
  let servprovModule: ServprovModule;

  beforeEach(() => {
    servprovModule = new ServprovModule();
  });

  it('should create an instance', () => {
    expect(servprovModule).toBeTruthy();
  });
});
