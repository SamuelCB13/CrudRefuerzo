import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAplicativoComponent } from './inicio-aplicativo.component';

describe('InicioAplicativoComponent', () => {
  let component: InicioAplicativoComponent;
  let fixture: ComponentFixture<InicioAplicativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAplicativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioAplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
