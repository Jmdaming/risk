import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbCountGraphComponent } from './cb-count-graph.component';

describe('CbCountGraphComponent', () => {
  let component: CbCountGraphComponent;
  let fixture: ComponentFixture<CbCountGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbCountGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbCountGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
