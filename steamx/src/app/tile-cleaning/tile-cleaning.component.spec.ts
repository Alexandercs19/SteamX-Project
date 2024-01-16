import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCleaningComponent } from './tile-cleaning.component';

describe('TileCleaningComponent', () => {
  let component: TileCleaningComponent;
  let fixture: ComponentFixture<TileCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileCleaningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TileCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
