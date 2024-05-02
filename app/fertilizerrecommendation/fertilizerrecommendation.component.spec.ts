import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerrecommendationComponent } from './fertilizerrecommendation.component';

describe('FertilizerrecommendationComponent', () => {
  let component: FertilizerrecommendationComponent;
  let fixture: ComponentFixture<FertilizerrecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FertilizerrecommendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FertilizerrecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
