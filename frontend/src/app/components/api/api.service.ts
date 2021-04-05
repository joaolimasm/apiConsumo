import { Observable } from 'rxjs';
import { Api } from './api.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:3000/"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",

    })
  }
  getAll(): Observable<Api> {
    return this.http.get<Api>(this.baseUrl)

  }
  getRandom(random: number): Observable<Api> {
    return this.http.get<Api>(`${this.baseUrl}random/${random}`)
  }

}
