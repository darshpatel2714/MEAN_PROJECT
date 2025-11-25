import { Component, NgModule, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { pipe } from 'rxjs';
import { SearchplayerPipe } from '../../searchplayer.pipe';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule , SearchplayerPipe],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent implements OnInit {
  players: any;
  searchName:any;
  isLoading = true
  constructor(private apiPlayer: ApiServiceService) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.apiPlayer.getPlayerData().subscribe((res) => {
      console.log(res , 'players data ');
      this.players = res;
      this.isLoading = false
    });
  }
  
  deletePlayer(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete the record with id ${id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiPlayer.deletePlayers(id).subscribe(() => {
          Swal.fire(
            'Deleted!',
            `The record with id ${id} has been deleted.`,
            'success'
          );
          this.getPlayers();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The record is safe.',
          'error'
        );
      }
    });
  }
  
}
