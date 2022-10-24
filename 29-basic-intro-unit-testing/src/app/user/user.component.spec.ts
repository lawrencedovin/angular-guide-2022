import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
  });

  it('should create the app', () => {
    // Creating the User Component
    let fixture = TestBed.createComponent(UserComponent);
    // debugElement is the Element exposed to us for testing purposes
    let app = fixture.debugElement.componentInstance;
    // Tests if the application exists and is starting up
    expect(app).toBeTruthy();
  })
});
