import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindListComponent } from './grind-list.component';

describe('GrindListComponent', () => {
  let component: GrindListComponent;
  let fixture: ComponentFixture<GrindListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
