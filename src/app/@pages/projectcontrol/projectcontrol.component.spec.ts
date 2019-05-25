import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcontrolComponent } from './projectcontrol.component';

describe('ProjectcontrolComponent', () => {
  let component: ProjectcontrolComponent;
  let fixture: ComponentFixture<ProjectcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
