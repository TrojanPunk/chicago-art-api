import { NgModule } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { CarouselComponent, CarouselCaptionComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

@NgModule({
    imports: [
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatIconModule,
        CarouselComponent,
        CarouselCaptionComponent,
        CarouselIndicatorsComponent,
        CarouselInnerComponent,
        CarouselItemComponent,
        IconModule
    ],

    exports: [
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatIconModule,
        CarouselComponent,
        CarouselCaptionComponent,
        CarouselIndicatorsComponent,
        CarouselInnerComponent,
        CarouselItemComponent,
        IconModule
    ]
})

export class MaterialModule { }