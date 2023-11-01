import { Component, OnInit } from '@angular/core';
import { ArtDetails } from 'src/shared/models/interfaces/art-details';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {
  favorites: ArtDetails[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.favorites = JSON.parse(localStorage.getItem('favorites')  || '')
    this.loading = false;
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }

}
