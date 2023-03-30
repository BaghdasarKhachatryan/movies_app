import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameOffer } from '../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private base_url: string = 'https://www.gamerpower.com/api/giveaways';

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<GameOffer[]> {
    return this.http.get<GameOffer[]>(this.base_url);
  }
}
