import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit() {

    this.galleryOptions = [
      {
        thumbnails: false,
        imageInfinityMove: true,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        height: '400px',
        width: '75%',
        previewDescription: false,
        previewCloseOnClick: true,
        previewCloseOnEsc: true
      },
      // max-width 800
      {
        breakpoint: 100

      }
    ];

    this.galleryImages = [
      {
        medium: './assets/slide1800.jpg',
        big: './assets/slide1800.jpg'
      },
      {
        medium: './assets/slide2800.jpg',
        big: './assets/slide1800.jpg'
      },
      {
        medium: './assets/slide3800.jpg',
        big: './assets/slide1800.jpg'
      },
      {
        medium: './assets/slide4800.jpg',
        big: './assets/slide1800.jpg'
      }
    ];
  }
}
