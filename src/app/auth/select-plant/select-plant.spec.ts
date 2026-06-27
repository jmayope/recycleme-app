import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlant } from './select-plant';

describe('SelectPlant', () => {
  let component: SelectPlant;
  let fixture: ComponentFixture<SelectPlant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPlant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPlant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
