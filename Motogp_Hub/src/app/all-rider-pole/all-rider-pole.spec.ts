import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRiderPole } from './all-rider-pole';

describe('AllRiderPole', () => {
  let component: AllRiderPole;
  let fixture: ComponentFixture<AllRiderPole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRiderPole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRiderPole);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
