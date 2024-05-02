import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmertableComponent } from './farmertable.component';

describe('FarmertableComponent', () => {
  let component: FarmertableComponent;
  let fixture: ComponentFixture<FarmertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmertableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
