import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends {active?: boolean, _id?: string, price?: number}> {

  entity: string = '';

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.config.apiUrl}${this.entity}`);
    // return new Observable<T[]>( observer => {
    //   let currentData: T[] = [];
    //   this.http.get<T[]>(`${this.config.apiUrl}${this.entity}`).subscribe(
    //     data => {
    //       currentData = data;
    //       observer.next(data);
    //     }
    //   );

    //   interval(5000).subscribe(
    //     num => currentData[0].price = Math.round(Math.random() * 10000)
    //   );
    // });
  }

  get(_id: string): Observable<T> {
    return this.http.get<T>(`${this.config.apiUrl}${this.entity}/${_id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(
      `${this.config.apiUrl}${this.entity}`,
      entity
    );
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.config.apiUrl}${this.entity}/${entity._id}`,
      entity
    );
  }

  remove(_id: string): Observable<T> {
    return this.http.delete<T>(`${this.config.apiUrl}${this.entity}/${_id}`);
  }

}
