import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(private http: HttpClient) { }

  fetchArtData(pageNumber: number) {
    return this.http.get(`https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_display,image_id&page=${pageNumber}&limit=12`);
  }

  fetchOneArtData(id: number) {
    return this.http.get(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_title,date_display,image_id,description`);
  }

  fetchEntireData(pageNumber: number, pageSize: number) {
    return this.http.get(`https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_display,image_id`);
  }
}