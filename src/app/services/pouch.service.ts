import { Injectable } from '@angular/core';
import { Show } from '../models/show.model';
import * as PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root'
})

export class PouchService {
  constructor() {
    // const db = new PouchDB('watchlist', {});
  }

  addShow(newShow: Show): void {}

  getAllShows(): Array<Show> {
    return null;
  }

}
