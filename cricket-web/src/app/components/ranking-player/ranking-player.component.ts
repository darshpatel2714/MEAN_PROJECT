import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ranking-player',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './ranking-player.component.html',
  styleUrl: './ranking-player.component.css'
})
export class RankingPlayerComponent implements OnInit {


  showT20Data: boolean = false;
  showTestData: boolean = false;
  showODIData: boolean = false;

  T20:any
  Test:any
  Odi:any

  constructor(private rankApi : ApiServiceService) { }

  ngOnInit(): void {
    this.showTest();
    this.showODI();
    this.showT20();
  }

  showT20() {
    this.showT20Data = true;
    this.showTestData = false;
    this.showODIData = false;
    //fetch and display T20 data
    this.rankApi.t20Data().subscribe((res)=>{
      this.T20 = res
    })

  }

  showTest() {
    this.showT20Data = false;
    this.showTestData = true;
    this.showODIData = false;
    // fetch and display TEST data
    this.rankApi.testData().subscribe((res)=>{
      this.Test = res
    })
  }

  showODI() {
    this.showT20Data = false;
    this.showTestData = false;
    this.showODIData = true;
    //fetch and display ODI data
    this.rankApi.odiData().subscribe((res)=>{
      this.Odi = res
    })
  }

}
