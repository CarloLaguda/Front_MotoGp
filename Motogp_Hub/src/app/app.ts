import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Rider } from './Models/rider.model';
import { AllRider } from './all-rider/all-rider';
import { Champions } from './champions/champions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AllRider,Champions],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Motogp_Hub';
  loading!: boolean
  obs!: Observable<Rider[]>
  lista_rider_all: Rider[] = []

  url: string = "https://5000-carlolaguda-gitpodmysql-94lrnwd0u7w.ws-eu120.gitpod.io"


  allrider_!: boolean
  allrider_Champion!: boolean
  allrider_Victory!: boolean
  allrider_Poles!: boolean
  allrider_Nation!: boolean
  constructor(public http: HttpClient){}
  getAllRider(){
    this.loading = true
    this.obs = this.http.get<Rider[]>(this.url)
    this.obs.subscribe(this.getData)
  }

  getData = (d: Rider[]) =>
  {
    this.allrider_ = true
    this.lista_rider_all = d
    console.log(this.lista_rider_all)
    this.loading = false


    this.allrider_Champion = false
    this.allrider_Nation = false
    this.allrider_Poles = false
    this.allrider_Victory = false
  }

  getAllRider_By_Championship(){
    this.allrider_Champion = true
    this.allrider_ = false
    this.allrider_Nation = false
    this.allrider_Poles = false
    this.allrider_Victory = false
  }
}
