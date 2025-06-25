import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuidadorDetalhesPage } from './cuidador-detalhes.page';

describe('CuidadorDetalhesPage', () => {
  let component: CuidadorDetalhesPage;
  let fixture: ComponentFixture<CuidadorDetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadorDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
