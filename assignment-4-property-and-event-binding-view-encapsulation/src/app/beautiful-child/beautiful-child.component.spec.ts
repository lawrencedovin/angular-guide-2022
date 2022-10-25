import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifulChildComponent } from './beautiful-child.component';

describe('BeautifulChildComponent', () => {
  let component: BeautifulChildComponent;
  let fixture: ComponentFixture<BeautifulChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifulChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautifulChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
