import { Component, Input, OnInit } from '@angular/core';
import { ArtDetails } from 'src/shared/models/interfaces/art-details';
import { ArtService } from 'src/shared/services/art.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() artist_title: string;
  @Input() date_display: string;
  @Input() image_id: string;
  @Input() isFavorite: boolean = false;

  favorites: ArtDetails[] = [];
  artData: any;

  ngOnInit(): void {
    this.isFavorite = this.favorites.some((art) => art.id === this.id);
  }

  constructor(private artService: ArtService) {
    this.id = 0;
    this.title ='';
    this.artist_title = '';
    this.date_display = '';
    this.image_id = '';
  }

  addToFavorites(id: number) {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    this.fetchFavorites(id);
  }

  fetchFavorites(id: number) {
    this.artService.fetchOneArtData(id).subscribe({
      next: (res) => {
        this.artData = res;
        this.checkDuplicates(id);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      },

      error: (err) => {
        console.log(err);
      }
    })
  }

  checkDuplicates(id: number) {
    const ID = this.favorites.filter((elem) => elem.id === id);
    console.log('ID', ID)

    if (ID.length == 0) {
      this.favorites.push(this.artData.data);
    }
  }
}
