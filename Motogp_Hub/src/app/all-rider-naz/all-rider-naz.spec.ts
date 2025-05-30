import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRiderNaz } from './all-rider-naz';

describe('AllRiderNaz', () => {
  let component: AllRiderNaz;
  let fixture: ComponentFixture<AllRiderNaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRiderNaz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRiderNaz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
