import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  shows: Array<Show>;
  constructor() {
    this.shows = [ new Show({
      name: 'Doctor Who',
      language: 'English',
      genres: ['Sci-Fi', ' Action', ' Adventure'],
      id: 210,
      summary: 'A show about something',
      status: 'ongoing',
      image: 'https://culvercitycrossroads.com/wp-content/uploads/2016/02/talent-show.jpg'
    }),
      new Show({
        name: 'The Magicians',
        language: 'English',
        genres: ['Sci-Fi', 'Action', 'Adventure'],
        id: 210,
        summary: 'A show about magicians and their trauma.',
        status: 'ongoing',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
      }),
      new Show({
        name: 'Smallville',
        language: 'English',
        genres: ['Sci-Fi', 'Action', 'Adventure'],
        id: 210,
        summary: 'A show about Superman as a teenager.',
        status: 'ongoing',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
      })
    ];
  }

  ngOnInit(): void {
  }

}
