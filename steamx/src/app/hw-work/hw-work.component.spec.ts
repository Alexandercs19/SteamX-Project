import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwWorkComponent } from './hw-work.component';

describe('HwWorkComponent', () => {
  let component: HwWorkComponent;
  let fixture: ComponentFixture<HwWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HwWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HwWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
