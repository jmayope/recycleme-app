import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportManagement } from './report-management';

describe('ReportManagement', () => {
  let component: ReportManagement;
  let fixture: ComponentFixture<ReportManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
