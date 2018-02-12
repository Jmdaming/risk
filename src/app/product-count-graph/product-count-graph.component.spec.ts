import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCountGraphComponent } from './product-count-graph.component';

describe('ProductCountGraphComponent', () => {
  let component: ProductCountGraphComponent;
  let fixture: ComponentFixture<ProductCountGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCountGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCountGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
