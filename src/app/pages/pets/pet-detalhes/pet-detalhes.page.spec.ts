import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetDetalhesPage } from './pet-detalhes.page';

describe('PetDetalhesPage', () => {
  let component: PetDetalhesPage;
  let fixture: ComponentFixture<PetDetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
