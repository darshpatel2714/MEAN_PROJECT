import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent implements OnInit {

  upcomingMatch:any
  isLoading = true
  afterLoading:any
  constructor(private apiData : ApiServiceService){}

  ngOnInit(): void {
    this.getUpcomingMatch()
  }

  getUpcomingMatch(){
    this.apiData.matches().subscribe((res)=>{
      this.upcomingMatch = res
      this.isLoading = false
    })
  }

}
