import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroprecommendationComponent } from './croprecommendation.component';

describe('CroprecommendationComponent', () => {
  let component: CroprecommendationComponent;
  let fixture: ComponentFixture<CroprecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CroprecommendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CroprecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
