import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRider } from './all-rider';

describe('AllRider', () => {
  let component: AllRider;
  let fixture: ComponentFixture<AllRider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
