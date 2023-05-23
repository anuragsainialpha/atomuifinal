import { UmUserRoleModule } from './um-user-role.module';

describe('UmUserRoleModule', () => {
  let umUserRoleModule: UmUserRoleModule;

  beforeEach(() => {
    umUserRoleModule = new UmUserRoleModule();
  });

  it('should create an instance', () => {
    expect(umUserRoleModule).toBeTruthy();
  });
});
