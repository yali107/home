import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InterestsAndHobbiesComponent } from './interests-and-hobbies.component';

describe('InterestsAndHobbiesComponent', () => {
  let component: InterestsAndHobbiesComponent;
  let fixture: ComponentFixture<InterestsAndHobbiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsAndHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsAndHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
