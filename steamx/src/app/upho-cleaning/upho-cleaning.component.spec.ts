import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UphoCleaningComponent } from './upho-cleaning.component';

describe('UphoCleaningComponent', () => {
  let component: UphoCleaningComponent;
  let fixture: ComponentFixture<UphoCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UphoCleaningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UphoCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
