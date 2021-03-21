import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WatchlistComponent} from './watchlist/watchlist.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {ShowDetailsComponent} from './show-details/show-details.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: '', component: WatchlistComponent},
  {path: 'search/:query', component: SearchResultComponent},
  {path: 'show/:id', component: ShowDetailsComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
