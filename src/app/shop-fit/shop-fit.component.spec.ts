import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFitComponent } from './shop-fit.component';

describe('ShopFitComponent', () => {
  let component: ShopFitComponent;
  let fixture: ComponentFixture<ShopFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
