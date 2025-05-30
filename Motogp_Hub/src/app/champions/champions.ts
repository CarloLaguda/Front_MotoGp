import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TopCampionati } from '../Models/riders_top_.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-champions',
  imports: [],
  templateUrl: './champions.html',
  styleUrl: './champions.css'
})
export class Champions {
  loading!: boolean
  obs!: Observable<TopCampionati[]>
  lista_rider_champ: TopCampionati[] = []
  constructor(public http:HttpClient){}

  url: string = "https://5000-carlolaguda-gitpodmysql-94lrnwd0u7w.ws-eu120.gitpod.io"
  getAllByChampionship(nMond: HTMLInputElement)
  {
    this.loading = true
    this.obs = this.http.get<TopCampionati[]>(this.url +"/MostWin_Championship/"+Number(nMond.value))
    this.obs.subscribe(this.getData_Champions)
  }

  getData_Champions = (d: TopCampionati[]) =>
  {
    this.lista_rider_champ = d
    this.loading = false
    console.log(this.lista_rider_champ)
  }
}
