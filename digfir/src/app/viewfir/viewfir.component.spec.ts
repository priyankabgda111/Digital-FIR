import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfirComponent } from './viewfir.component';

describe('ViewfirComponent', () => {
  let component: ViewfirComponent;
  let fixture: ComponentFixture<ViewfirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
