import { Component, OnInit } from '@angular/core';
import { TraleeTutorsDataService } from '../tralee-tutors-data.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [TraleeTutorsDataService]
})
export class HomeListComponent implements OnInit {

  constructor() { }
  title = 'Tralee Tutors';
  ngOnInit() {
  }

}
