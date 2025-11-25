import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  showTotalWickets:boolean =false;
  myForm: any;
  id: string | null = '';
  playersData: any;
   _id: any;

  constructor(
    private playerApi: ApiServiceService,
    public router: Router,
    private actRouter: ActivatedRoute
  ) {
    this.myForm = new FormGroup({
      pName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$'),
      ]),
      pRole: new FormControl('', [Validators.required]),
      pRun: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{3,5}'),
      ]),
      pMatch: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,3}'),
      ]),
      pUrl: new FormControl('', [Validators.required]),
      pWickets :new FormControl('')

    });
  }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe((param)=>{
      console.log(param.get('id'));
       this.id = param.get('id')

      if(this.id != null){
        this.playerApi.updatePlayer(this.id).subscribe((res)=>{
          console.log(res,'Update Data');
          this.playersData = res
        })
      }
      
    })
  }


  onRoleChange() {
    const role = this.myForm.get('pRole').value;
    this.showTotalWickets = role === 'Bowler' || role === 'All Rounder';
    if (this.showTotalWickets) {
      this.myForm.get('pWickets').setValidators(Validators.required);
    } else {
      this.myForm.get('pWickets').clearValidators();
    }
    this.myForm.get('pWickets').updateValueAndValidity();
  }
  

  editPlayerData(val: any) {
    console.log(val);
    const players = {
      _id: this.id,
      name: val.pName,
      role: val.pRole,
      totalRun: val.pRun,
      totalMatch: val.pMatch,
      photo: val.pUrl,
      totalWickets: this.showTotalWickets ? val.pWickets : null
    };
    
    this.playerApi.updatePlayerData(players).subscribe((res) => {  
      console.log(res,'new update data');
      
      Swal.fire({
        icon: 'success',
        title: 'Player Updated Successfully.🎉',
        // text: 'User already exists. Please try a different email.',
        showConfirmButton: true,
        confirmButtonText: 'OK',
        customClass: {
          popup: 'my-swal-popup',
        }
      });
      this.router.navigate(['/players']);
    });
  }
}
