import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBeautyComponent } from './shop-beauty.component';

describe('ShopBeautyComponent', () => {
  let component: ShopBeautyComponent;
  let fixture: ComponentFixture<ShopBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBeautyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
