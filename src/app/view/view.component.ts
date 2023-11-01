import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtService } from 'src/shared/services/art.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number = 0;
  loading: boolean = true;
  oneArtData: any = [];

  constructor(private artService: ArtService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.getOneArt()
  }

  getOneArt() {
    this.artService.fetchOneArtData(this.id).subscribe({
      next: (res) => {
        this.loading = false;
        this.oneArtData = res;
      },
      error : (err) => {
        console.log(err);
      }
    })
  }
}
