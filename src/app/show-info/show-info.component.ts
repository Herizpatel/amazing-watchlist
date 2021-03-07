import { Component, OnInit, Input} from '@angular/core';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  @Input() show: Show;
  constructor() {
    // this.show = new Show({name: 'Doctor Who',
    //   language: 'English',
    //   genres: ['Sci-Fi', ' Action', ' Adventure'],
    //   id: 210,
    //   summary: 'A show about something',
    //   status: 'ongoing',
    //   image: 'https://culvercitycrossroads.com/wp-content/uploads/2016/02/talent-show.jpg'
    // });
  }

  ngOnInit(): void {
  }

}
