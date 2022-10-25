import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

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
  });

  it('should use the user name from the service', () => {
    // Creating the User Component
    let fixture = TestBed.createComponent(UserComponent);
    // debugElement is the Element exposed to us for testing purposes
    let app = fixture.debugElement.componentInstance;
    // Uses Angular Injector and gets instance of UserService
    // Forces UserService to be injected into the Component in testing environment
    let userService = fixture.debugElement.injector.get(UserService);
    // Change detectiction updates our properties of app.user.name according to userService.user.name
    fixture.detectChanges();
    // Checks if userService user.name is equal to app user.name
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in', () => {
    // Creating the User Component
    let fixture = TestBed.createComponent(UserComponent);
    // debugElement is the Element exposed to us for testing purposes
    let app = fixture.debugElement.componentInstance;
    // Checks if app is Logged in
    app.isLoggedIn = true;
    // Change detectiction updates our properties of app.user.name according to userService.user.name
    fixture.detectChanges();
    // Gets accessed to compiled template
    let compiled = fixture.debugElement.nativeElement;
    // Checks if the template contains app user.name
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it(`shouldn't display the user name if user is not logged in`, () => {
    // Creating the User Component
    let fixture = TestBed.createComponent(UserComponent);
    // debugElement is the Element exposed to us for testing purposes
    let app = fixture.debugElement.componentInstance;
    // Checks if app is Logged in
    app.isLoggedIn = false;
    // Change detectiction updates our properties of app.user.name according to userService.user.name
    fixture.detectChanges();
    // Gets accessed to compiled template
    let compiled = fixture.debugElement.nativeElement;
    // Checks if the template doesn't contain app user.name
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it(`should fetch data successfully if called asynchronously`, waitForAsync (() => {
    // Creating the User Component
    let fixture = TestBed.createComponent(UserComponent);
    // debugElement is the Element exposed to us for testing purposes
    let app = fixture.debugElement.componentInstance;
    // Uses Angular Injector and gets instance of DataService
    // Forces DataService to be injected into the Component in testing environment
    let dataService = fixture.debugElement.injector.get(DataService);
    // spyOn means we get informed/listen everytime getDetails() gets executed.
    // When getDetails() gets executed when running a test, we won't execute it
    // and instead we will return a value on our own.
    // 1st argument is what we want to spy on, 2nd argument is what method we
    // want to spy on within the dataService.
    // Promise.resolve will execute the async code and will eventually give us
    // back our own Data and not what the async task would have given us.
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    // Updates Component after getting our own Promise.resolve('Data') back.
    fixture.detectChanges();
    // Reacts to all asynchronous tasks that are finished
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  }));

  it(`shouldn't fetch data successfully if not called asynchronously`, () => {
    // Creating the User Component
    let fixture = TestBed.createComponent(UserComponent);
    // debugElement is the Element exposed to us for testing purposes
    let app = fixture.debugElement.componentInstance;
    // Uses Angular Injector and gets instance of DataService
    // Forces DataService to be injected into the Component in testing environment
    let dataService = fixture.debugElement.injector.get(DataService);
    // spyOn means we get informed/listen everytime getDetails() gets executed.
    // When getDetails() gets executed when running a test, we won't execute it
    // and instead we will return a value on our own.
    // 1st argument is what we want to spy on, 2nd argument is what method we
    // want to spy on within the dataService.
    // Promise.resolve will execute the async code and will eventually give us
    // back our own Data and not what the async task would have given us.
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    // Updates Component after getting our own Promise.resolve('Data') back.
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });


  it(`should fetch data successfully if called asynchronously`, fakeAsync (() => {
    // Creating the User Component
    let fixture = TestBed.createComponent(UserComponent);
    // debugElement is the Element exposed to us for testing purposes
    let app = fixture.debugElement.componentInstance;
    // Uses Angular Injector and gets instance of DataService
    // Forces DataService to be injected into the Component in testing environment
    let dataService = fixture.debugElement.injector.get(DataService);
    // spyOn means we get informed/listen everytime getDetails() gets executed.
    // When getDetails() gets executed when running a test, we won't execute it
    // and instead we will return a value on our own.
    // 1st argument is what we want to spy on, 2nd argument is what method we
    // want to spy on within the dataService.
    // Promise.resolve will execute the async code and will eventually give us
    // back our own Data and not what the async task would have given us.
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    // Updates Component after getting our own Promise.resolve('Data') back.
    fixture.detectChanges();
    // In a fake async environment, finish all async tasks now.
    tick();
    expect(app.data).toBe('Data');
  }));
});
