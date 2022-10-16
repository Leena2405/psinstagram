import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface GetAllDogsRespone {
  message: Record<string, string[]>;
  status: string;
}
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly http: HttpClient) {}
  public getAllDogs() {
    return this.http.get<GetAllDogsRespone>(
      `${environment.apiurl}breeds/list/all`
    );
  }
}
