import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewfirComponent } from './previewfir.component';

describe('PreviewfirComponent', () => {
  let component: PreviewfirComponent;
  let fixture: ComponentFixture<PreviewfirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewfirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewfirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
