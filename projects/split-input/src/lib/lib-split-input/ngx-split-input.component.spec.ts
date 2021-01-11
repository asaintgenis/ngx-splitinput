import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {SplitInputComponent} from './split-input.component';

describe('NgxSplitInputComponent', () => {
  let component: SplitInputComponent;
  let fixture: ComponentFixture<SplitInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
