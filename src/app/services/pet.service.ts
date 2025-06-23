import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  doc,
  addDoc,
  collectionData,
  docData,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  } from '@angular/fire/firestore';
  import { Observable } from 'rxjs';

export interface Pet {
  id?: string;
  nome: string;
  especie: string;
  raca: string;
  idade: number;
  observacoes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private firestore: Firestore) {}

  public getPets(): Observable<Pet[]> {
    const petsRef = collection(this.firestore, 'pets');
    const q = query(petsRef, orderBy('nome'));
    return collectionData(q, { idField: 'id' }) as Observable<Pet[]>;
  }

  public getPet(id: string): Observable<Pet | undefined> {
    const petRef = doc(this.firestore, `pets/${id}`);
    return docData(petRef, { idField: 'id' }) as Observable<Pet | undefined>;
  }

  public addPet(pet: Pet) {
    const petRef = collection(this.firestore, 'pets');
    return addDoc(petRef, { ...pet, ceratedAt: Date.now() });
  }

  public updatePet(pet: Pet) {
    const petRef = doc(this.firestore, `pets/${pet.id}`);
    return updateDoc(petRef, { nome: pet.nome, especie: pet.especie, raca: pet.raca, idade: pet.idade, observacoes: pet.observacoes });
  }

  public deletePet(id: string) {
    const petRef = doc(this.firestore, `pets/${id}`)
    return deleteDoc(petRef);
  }
}
