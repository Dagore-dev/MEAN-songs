import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SongsListComponent } from './components/songs/songs-list/songs-list.component'
import { SongDetailComponent } from './components/songs/song-detail/song-detail.component'

const routes: Routes = [
  { path: 'songs', component: SongsListComponent },
  { path: 'songs/:songId', component: SongDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
