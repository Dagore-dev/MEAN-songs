import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SongsListComponent } from './components/songs/songs-list/songs-list.component'
import { SongDetailComponent } from './components/songs/song-detail/song-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
