import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHouseComponent } from './shop-house.component';

describe('ShopHouseComponent', () => {
  let component: ShopHouseComponent;
  let fixture: ComponentFixture<ShopHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
