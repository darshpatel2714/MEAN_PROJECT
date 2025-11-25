import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-match',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-match.component.html',
  styleUrl: './live-match.component.css'
})
export class LiveMatchComponent implements OnInit {

  liveScore:any
  isLoding = true
  constructor(private apiData : ApiServiceService){}

  ngOnInit(): void {
    this.getData() 
  }

  getData(){
    this.apiData.getMatchScore().subscribe((res)=>{
      // console.log(res);
      this.liveScore = res;
      this.isLoding = false; 
    })
    error:(err:any)=>{
      console.error('Error fetching data', err);
      this.isLoding = false;
    }
  }

}
