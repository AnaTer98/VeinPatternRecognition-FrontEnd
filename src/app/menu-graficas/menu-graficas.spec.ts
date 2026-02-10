import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGraficas } from './menu-graficas';

describe('MenuGraficas', () => {
  let component: MenuGraficas;
  let fixture: ComponentFixture<MenuGraficas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuGraficas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuGraficas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
