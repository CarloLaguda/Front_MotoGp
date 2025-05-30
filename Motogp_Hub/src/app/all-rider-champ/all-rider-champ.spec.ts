import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRiderChamp } from './all-rider-champ';

describe('AllRiderChamp', () => {
  let component: AllRiderChamp;
  let fixture: ComponentFixture<AllRiderChamp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRiderChamp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRiderChamp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
