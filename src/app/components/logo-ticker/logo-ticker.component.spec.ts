import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTickerComponent } from './logo-ticker.component';

describe('LogoTickerComponent', () => {
  let component: LogoTickerComponent;
  let fixture: ComponentFixture<LogoTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoTickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
