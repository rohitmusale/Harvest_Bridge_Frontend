import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesticiderecommendationComponent } from './pesticiderecommendation.component';

describe('PesticiderecommendationComponent', () => {
  let component: PesticiderecommendationComponent;
  let fixture: ComponentFixture<PesticiderecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesticiderecommendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PesticiderecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
