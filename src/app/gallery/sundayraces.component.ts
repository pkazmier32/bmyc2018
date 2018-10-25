import { Component, OnInit, Inject } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-gallery',
  templateUrl: './sundayraces.component.html',
  styleUrls: ['./gallery.component.css']
})
export class SundayRacesComponent implements OnInit {
  closeResult: string;
  imageName: string;

  constructor(private modalService: NgbModal) { }

  

  ngOnInit() {

  }

  open(content, idx) {
    //var image = document.getElementById("1");
    console.log(idx);
    let images: Array<string> = new Array();
    images.push("../../assets/BowMarSundayRaces_08262018/file1-7.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file2-4.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file3-2.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file4-2.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file5-2.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file6-2.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file7-2.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file8-1.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file9-1.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file10-1.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file11-1.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file12-1.jpeg");
    images.push("../../assets/BowMarSundayRaces_08262018/file-15.jpeg");
    this.imageName = images[idx];

    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}