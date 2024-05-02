import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectfarmerComponent } from './connectfarmer.component';

describe('ConnectfarmerComponent', () => {
  let component: ConnectfarmerComponent;
  let fixture: ComponentFixture<ConnectfarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectfarmerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
