import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferManagement } from './offer-management';

describe('OfferManagement', () => {
  let component: OfferManagement;
  let fixture: ComponentFixture<OfferManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
