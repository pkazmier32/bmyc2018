import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallerycarosel.component.html',
  styleUrls: ['./gallerycarosel.component.css']
})
export class GalleryCaroselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      document.getElementById("body").classList.remove("jumbotron");
  }

}