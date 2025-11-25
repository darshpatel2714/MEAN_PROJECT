import { Routes } from '@angular/router';
import { LiveMatchComponent } from './components/live-match/live-match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PointTableComponent } from './components/point-table/point-table.component';
import { RankingPlayerComponent } from './components/ranking-player/ranking-player.component';
import { LoginComponent } from './components/login/login.component';
import { authLoginGuard } from './guards/auth-login.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    {path:'' , component:LiveMatchComponent},
    {path:'matches' , component: MatchesComponent , canActivate:[authLoginGuard]},
    {path:'pointtable' , component: PointTableComponent , canActivate:[authLoginGuard]},
    {path:'ranking' , component: RankingPlayerComponent , canActivate:[authLoginGuard]},
    {path:'login' , component:LoginComponent },
    {path:'signup' , component:SignUpComponent },
    {path:'players'  , canActivate:[authLoginGuard] , loadChildren: () => import('./crud/crud.module').then(m => m.CRUDModule)},
    {path:'**' , component:PagenotfoundComponent},
];
