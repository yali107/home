import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsAndHobbiesComponent } from './interests-and-hobbies.component';

describe('InterestsAndHobbiesComponent', () => {
  let component: InterestsAndHobbiesComponent;
  let fixture: ComponentFixture<InterestsAndHobbiesComponent>;

  beforeEach(async(() => {
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
