import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
  private apiUrl = 'http://localhost:3000/animals'

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name)
  }

  constructor(private http: HttpClient) { }
}
