import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingCalorieCalculatorComponent } from './walking-calorie-calculator.component';

describe('WalkingCalorieCalculatorComponent', () => {
  let component: WalkingCalorieCalculatorComponent;
  let fixture: ComponentFixture<WalkingCalorieCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingCalorieCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingCalorieCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
