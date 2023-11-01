import { Component, OnInit } from '@angular/core';
import { ArtDetails } from 'src/shared/models/interfaces/art-details';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  favorites: ArtDetails[] = [];

  ngOnInit(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
