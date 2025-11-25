import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PointTableComponent } from './components/point-table/point-table.component';
import { LiveMatchComponent } from './components/live-match/live-match.component';
import { PlayersComponent } from './components/players/players.component';
import { RankingPlayerComponent } from './components/ranking-player/ranking-player.component';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from './services/api-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NavbarComponent,
    MatchesComponent,
    PointTableComponent,
    LiveMatchComponent,
    PlayersComponent,
    RankingPlayerComponent,
    FormsModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cricket-web';

  constructor(public service:ApiServiceService){}
}
