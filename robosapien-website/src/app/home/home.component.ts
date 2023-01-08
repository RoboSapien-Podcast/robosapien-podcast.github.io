import { Component } from '@angular/core';
import { Logos } from '../logos/socialLinks'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  appTitle = 'Robo Sapien Podcast';
  links = [
    {
      app: 'Instagram',
      title: 'robosapien_podcast',
      logo: '',
      url: 'https://www.instagram.com/robosapien_podcast/',
    },
    {
      app: 'Gmail',
      title: 'robosapienpodcast@gmail.com',
      logo: '',
      url: 'robosapienpodcast@gmail.com',
    },
    {
      app: 'Youtube',
      title: 'robosapien_podcast',
      logo: '',
      url: 'https://www.youtube.com/channel/UCD6jyoq93c9b-XBiyVm4h6g',
    },
    {
      app: 'Spotify',
      title: 'RoboSapien Podcast',
      logo: '',
      url: 'https://open.spotify.com/show/1b8KeYmwg4edRV2H3K4aRM',
    },
    {
      app: 'ApplePodcast',
      title: 'robosapien_podcast',
      logo: '',
      url: 'https://podcasts.apple.com/in/podcast/robosapien-podcast/id1653235737',
    },
  ];
}
