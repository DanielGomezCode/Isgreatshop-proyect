import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTechComponent } from './shop-tech.component';

describe('ShopTechComponent', () => {
  let component: ShopTechComponent;
  let fixture: ComponentFixture<ShopTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
