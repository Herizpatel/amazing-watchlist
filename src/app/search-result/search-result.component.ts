import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show.model';
import {DummyService} from '../services/dummy.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  shows: Array<Show>;
  constructor(private dummyService: DummyService) {
    this.dummyService.getShows().subscribe(
      (s: Show[]) => {this.shows = s;});
  }

  ngOnInit(): void {
  }

}
