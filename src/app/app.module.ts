import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowInfoComponent } from './show-info/show-info.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {ErrorComponent} from './error/error.component';
import { EncryptPipe } from './controls/encrypt.pipe';
import { ShortenPipe } from './controls/shorten.pipe';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';
import { HtmlstripperPipe } from './controls/htmlstripper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultComponent,
    ShowDetailsComponent,
    ShowInfoComponent,
    WatchlistComponent,
    ErrorComponent,
    EncryptPipe,
    ShortenPipe,
    HtmlstripperPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
