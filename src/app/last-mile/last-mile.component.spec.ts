import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileComponent } from './last-mile.component';

describe('LastMileComponent', () => {
  let component: LastMileComponent;
  let fixture: ComponentFixture<LastMileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
