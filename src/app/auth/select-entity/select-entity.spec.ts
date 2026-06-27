import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEntity } from './select-entity';

describe('SelectEntity', () => {
  let component: SelectEntity;
  let fixture: ComponentFixture<SelectEntity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectEntity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEntity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
