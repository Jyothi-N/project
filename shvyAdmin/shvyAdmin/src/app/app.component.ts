import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shvyAdmin';
  playLists: any;
  selectSong: any;
  play = true;
  play_song = true;
  constructor(private service: PlaylistService) {

  }

  ngOnInit () {
    this.getPlaylists();
  }

  getPlaylists() {
    this.service.getPlaylists().subscribe(playLists => {
      this.playLists = playLists;
      this.selectSong = this.playLists[0];
    });
  }

  playSong() {
    this.play = !this.play;
    this.play_song = true;
  }
  selectedSong(song) {
    this.selectSong = song;
  }
}
