import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  allowNewServer = false;
  secretPassword = '';
  serverCreated = false;
  detailsCreated = false;
  details = [];

  onCreateDetails() {
    this.details.push(this.secretPassword);
    this.detailsCreated = true;
    console.log(this.getColor());
  }

  onUpdateDetails(event: any) {
    this.secretPassword = event.target.value;
  }

  getColor() {
    return this.details.length > 5 ? 'balls' : 'not balls'
  }
}
