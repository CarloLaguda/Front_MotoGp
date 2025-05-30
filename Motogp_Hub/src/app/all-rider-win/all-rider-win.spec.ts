import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRiderWin } from './all-rider-win';

describe('AllRiderWin', () => {
  let component: AllRiderWin;
  let fixture: ComponentFixture<AllRiderWin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRiderWin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRiderWin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
