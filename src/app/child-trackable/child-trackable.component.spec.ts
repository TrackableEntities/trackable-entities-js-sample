import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTrackableComponent } from './child-trackable.component';

describe('ChildTrackableComponent', () => {
  let component: ChildTrackableComponent;
  let fixture: ComponentFixture<ChildTrackableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTrackableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTrackableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
