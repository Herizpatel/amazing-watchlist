import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show.model';
import {DummyService} from '../services/dummy.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  shows: Array<Show>;
  query: string;
  constructor(private dummyService: DummyService, private route: ActivatedRoute) {
    this.query = this.route.snapshot.params.query;
    // this.dummyService.getShows().subscribe(
    //   (s: Show[]) => {this.shows = s;});
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => { this.query = p.query; });
    this.dummyService.getShows().subscribe((s) => { this.shows = s; });
  }
}
