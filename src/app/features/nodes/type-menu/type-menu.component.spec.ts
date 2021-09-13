import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMenuComponent } from './type-menu.component';

describe('TypeMenuComponent', () => {
  let component: TypeMenuComponent;
  let fixture: ComponentFixture<TypeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
