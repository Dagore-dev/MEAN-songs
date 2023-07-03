import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject, takeUntil } from 'rxjs'
import ISong from 'src/app/interfaces/ISong'
import { SongsService } from 'src/app/services/songs.service'

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit, OnDestroy {
  songsList: ISong[] = []
  stop$ = new Subject<void>()

  constructor (private readonly songsService: SongsService) { }

  ngOnInit (): void {
    this.songsService
      .getAll()
      .pipe(takeUntil(this.stop$))
      .subscribe({
        next: songs => (this.songsList = songs),
        error: error => console.log(error)
      })
  }

  ngOnDestroy (): void {
    this.stop$.next()
    this.stop$.complete()
  }
}
