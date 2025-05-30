import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPilots } from './all-pilots';

describe('AllPilots', () => {
  let component: AllPilots;
  let fixture: ComponentFixture<AllPilots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPilots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPilots);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
