import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private base_url: string = 'https://www.gamerpower.com/api/giveaways';

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    let params = new HttpParams();

    params = params.set('api', 'secret_key');

    return this.http.get<Movie[]>(this.base_url);
  }
}
