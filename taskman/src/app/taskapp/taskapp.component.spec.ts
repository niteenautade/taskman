import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskappComponent } from './taskapp.component';

describe('TaskappComponent', () => {
  let component: TaskappComponent;
  let fixture: ComponentFixture<TaskappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
