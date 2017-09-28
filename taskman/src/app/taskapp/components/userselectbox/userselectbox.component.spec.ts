import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserselectboxComponent } from './userselectbox.component';

describe('UserselectboxComponent', () => {
  let component: UserselectboxComponent;
  let fixture: ComponentFixture<UserselectboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserselectboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserselectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
