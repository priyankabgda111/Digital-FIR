import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilefirComponent } from './filefir.component';

describe('FilefirComponent', () => {
  let component: FilefirComponent;
  let fixture: ComponentFixture<FilefirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilefirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilefirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
