import { UmUserAssociationModule } from './um-user-association.module';

describe('UmUserAssociationModule', () => {
  let umUserAssociationModule: UmUserAssociationModule;

  beforeEach(() => {
    umUserAssociationModule = new UmUserAssociationModule();
  });

  it('should create an instance', () => {
    expect(umUserAssociationModule).toBeTruthy();
  });
});
