import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject, takeUntil } from 'rxjs'
import ISong from 'src/app/interfaces/ISong'
import { SongsService } from 'src/app/services/songs.service'

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit, OnDestroy {
  song: ISong | null = null
  stop$ = new Subject<void>()

  constructor (private readonly route: ActivatedRoute, private readonly songsService: SongsService) { }

  ngOnInit (): void {
    this.route.params.subscribe(params => {
      this.songsService
        .getById(params['songId'])
        .pipe(takeUntil(this.stop$))
        .subscribe({
          next: song => (this.song = song),
          error: error => console.log(error)
        })
    })
  }

  ngOnDestroy (): void {
    this.stop$.next()
    this.stop$.complete()
  }
}
