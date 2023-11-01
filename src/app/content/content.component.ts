import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArtDetails } from 'src/shared/models/interfaces/art-details';
import { ArtService } from 'src/shared/services/art.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  displayedArt: Array<ArtDetails> = [];
  artData: any = [];
  currentPage: number;
  loading: boolean = true;
  searchForm: FormGroup;
  title = 'reactive-form';
  favorites: ArtDetails[] = [];

  constructor(private artService: ArtService, private fb: FormBuilder) {
    this.currentPage = 1;
    this.searchForm = this.fb.group({})
   }

  ngOnInit() {
    this.getArtData(this.currentPage);
    console.log('displayedArt', this.displayedArt)
    this.searchForm = this.fb.group({
      title: this.fb.control('')
    });
  }

  filterOnTitle(query: string) {
    const RETURN_ARRAY = this.artData.data.filter((art : any) => art.title.toLowerCase().includes(query?.toLowerCase()))
    console.log('return_array', RETURN_ARRAY);
    return RETURN_ARRAY;
  }

  logForm() {
    if (this.searchForm.valid) {
      this.displayedArt = this.filterOnTitle(this.searchForm.value?.title)
    } 
    
    else {
      this.displayedArt = this.artData
    }
    console.log(this.displayedArt)
  }

  getArtData(currentPage: number): void {
    this.artService.fetchArtData(currentPage).subscribe(
      {
        next: (res) => {
          this.loading = false;
          this.artData = res;
          this.displayedArt = this.artData.data;
          console.log('hello', this.artData)
        },
        error: err => console.log(err)
      }
    )
  }

  previousPage() {
    this.loading = true;
    this.getArtData(this.currentPage--);
  }

  nextPage() {
    this.loading = true;
    this.getArtData(this.currentPage++);
  }
}
