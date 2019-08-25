import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitLayoutComponent } from './cockpit-layout.component';

describe('CockpitLayoutComponent', () => {
  let component: CockpitLayoutComponent;
  let fixture: ComponentFixture<CockpitLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockpitLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
