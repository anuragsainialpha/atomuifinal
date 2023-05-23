import { LocationScanModule } from './location-scan.module';

describe('LocationScanModule', () => {
  let locationScanModule: LocationScanModule;

  beforeEach(() => {
    locationScanModule = new LocationScanModule();
  });

  it('should create an instance', () => {
    expect(locationScanModule).toBeTruthy();
  });
});
