import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsComponent } from './reasons.component';

describe('ReasonsComponent', () => {
  let component: ReasonsComponent;
  let fixture: ComponentFixture<ReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReasonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
