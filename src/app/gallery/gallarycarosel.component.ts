import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallerycarosel.component.html',
  styleUrls: ['./gallerycarosel.component.css']
})
export class GalleryCaroselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     // document.getElementById("body").classList.remove("jumbotron");
    // var elements = document.getElementsByClassName("jumbotron");
    //while(elements.length > 0){
    //    elements[0].parentNode.removeChild(elements[0]);
    //}
  }

}