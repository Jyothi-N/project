import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylists() {
    return this.http.get('https://5dd1894f15bbc2001448d28e.mockapi.io/playlist');
  }
}
