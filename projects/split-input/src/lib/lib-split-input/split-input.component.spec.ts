import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitInputComponent } from './split-input.component';

describe('SplitInputComponent', () => {
  let component: SplitInputComponent;
  let fixture: ComponentFixture<SplitInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
