import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteManifestManagement } from './waste-manifest-management';

describe('WasteManifestManagement', () => {
  let component: WasteManifestManagement;
  let fixture: ComponentFixture<WasteManifestManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasteManifestManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteManifestManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
