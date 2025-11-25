import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchplayer',
  standalone: true
})
export class SearchplayerPipe implements PipeTransform {

  transform(players:any[],searchName:any):any{
    if(!players || !searchName){
      return players
    }
  return players.filter((e:any)=> e.name.toLowerCase().includes(searchName.toLowerCase()))
    
  }

}
