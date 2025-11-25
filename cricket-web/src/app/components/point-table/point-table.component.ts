import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css',
})
export class PointTableComponent implements OnInit {
  pointTable: any;
  winLose:any
  data: any;
  isLoading = true
  constructor(private apiPointData: ApiServiceService) {}

  ngOnInit(): void {
    this.getPointTableData();
  }

  getPointTableData() {
    this.apiPointData.getPointTable().subscribe((res) => {
      this.pointTable = res;
      this.isLoading = false
    });
  }
}
