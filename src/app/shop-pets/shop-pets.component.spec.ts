import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPetsComponent } from './shop-pets.component';

describe('ShopPetsComponent', () => {
  let component: ShopPetsComponent;
  let fixture: ComponentFixture<ShopPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
