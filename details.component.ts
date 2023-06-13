import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  detailsData:any;
  detailsInfo:any;
constructor(){
}
ngOnInit(){
  this.detailsInfo = localStorage.getItem('details');
  this.detailsData =  JSON.parse(this.detailsInfo)
}
}
