import { Component, OnInit } from '@angular/core';
import { TraleeDataService } from '../tralee-data.service';

export class Grind {
  _id: string;
  grindTitle: string;
  author: string
  description: String;
  times: number[];
  rating: number;
  price: number;
}

@Component({
  selector: 'grind-list',
  templateUrl: './grind-list.component.html',
  styleUrls: ['./grind-list.component.css']
})
export class GrindListComponent implements OnInit {

  constructor(private traleeDataService: TraleeDataService) {
    
  }

  public grinds: Grind[];

  private getGrinds(): void {
    this.traleeDataService
      .getGrinds()
        .then(foundGrinds => this.grinds = foundGrinds);
  }

  ngOnInit() {
    this.getGrinds();
  }

}
