import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsEconomicsComponent } from './indicators-economics.component';

describe('IndicatorsEconomicsComponent', () => {
  let component: IndicatorsEconomicsComponent;
  let fixture: ComponentFixture<IndicatorsEconomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorsEconomicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorsEconomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
