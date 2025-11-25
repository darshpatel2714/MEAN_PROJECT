import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addplayer',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './addplayer.component.html',
  styleUrl: './addplayer.component.css'
})
export class AddplayerComponent {
  showTotalWickets:boolean =false;
  myForm:any

  constructor(private playerApi:ApiServiceService ,private router:Router){
    this.myForm = new FormGroup({
      pName : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')]),
      pRole : new FormControl('',[Validators.required]),
      pRun : new FormControl('',[Validators.required,Validators.pattern('[0-9]{3,5}')]),
      pMatch : new FormControl('',[Validators.required,Validators.pattern('[0-9]{1,3}')]),
      pUrl : new FormControl('',[Validators.required]),
      pWickets :new FormControl('')

    })

  }
  submitForm(){
  }

  onRoleChange() {
    const role = this.myForm.get('pRole').value;
    this.showTotalWickets = role === 'Bowler' || role === 'All Rounder';
    if (this.showTotalWickets) {
      this.myForm.get('pWickets').setValidators(Validators.required);
    } else {
      this.myForm.get('pWickets').clearValidators();
    }
  }

  playerSubmit(val:any){
    const players={
      name:val.pName,
      role:val.pRole,
      totalRun:val.pRun,
      totalMatch:val.pMatch,
      photo:val.pUrl,
      totalWickets: val.pWickets

    }
    this.playerApi.addPlayerData(players).subscribe((res)=>{
      console.log(res,"New Data Added");
      Swal.fire({
        icon: 'success',
        title: 'New Player Added Successfully.✌️',
        showConfirmButton: true,
        confirmButtonText: 'OK',
      });
      this.router.navigate(['/players'])
    })
  }

}
