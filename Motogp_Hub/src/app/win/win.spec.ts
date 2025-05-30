import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Win } from './win';

describe('Win', () => {
  let component: Win;
  let fixture: ComponentFixture<Win>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Win]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Win);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
