import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Rider } from './Models/rider.model';
import { AllRider } from './all-rider/all-rider';
import { AllRiderWin } from './all-rider-win/all-rider-win';
import { AllRiderPole } from './all-rider-pole/all-rider-pole';
import { AllRiderNaz } from './all-rider-naz/all-rider-naz';
import { AllRiderChamp } from './all-rider-champ/all-rider-champ';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AllRider, AllRiderWin,AllRiderPole, AllRiderNaz, AllRiderChamp ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App 
{
  protected title = 'Motogp_Hub';
  loading!: boolean
  obs!: Observable<Rider[]>
  url: string = "https://5000-carlolaguda-gitpodmysql-vtr74bnqwa1.ws-eu120.gitpod.io"

  allrider_!: boolean
  allrider_Champion!: boolean
  allrider_Victory!: boolean
  allrider_Poles!: boolean
  allrider_Nation!: boolean

  errore: string = ""

  constructor(public http: HttpClient){}

  lista_rider_all: Rider[] = []
  getAllRider()
  {
    this.allrider_ = true
    this.allrider_Champion = false
    this.allrider_Nation = false
    this.allrider_Poles = false
    this.allrider_Victory = false

    this.errore = ""


    this.loading = true
    this.obs = this.http.get<Rider[]>(this.url)
    this.obs.subscribe(this.getData)
  }
  getData = (d: Rider[]) =>
  {
    this.lista_rider_all = d
    if (this.lista_rider_all.length === 0){
      this.errore = "Nessun pilota trovato :/"
    }
    else{
      console.log(this.lista_rider_all)
      this.loading = false
    }
  }


  lista_rider_champ: Rider[] = []
  getAllRider_By_Championship()
  {
    this.allrider_Champion = true
    this.allrider_ = false
    this.allrider_Nation = false
    this.allrider_Poles = false
    this.allrider_Victory = false

    this.errore = ""
  }

  getAllByChampionship(nMond: HTMLInputElement)
  {
    this.loading = true
    this.obs = this.http.get<Rider[]>(this.url +"/MostWin_Championship/"+Number(nMond.value))
    this.obs.subscribe(this.getData_Champions)
    nMond.value = ""
  }
  getData_Champions = (d: Rider[]) =>
  {
    this.lista_rider_champ = d
    if (this.lista_rider_champ.length === 0){
      this.errore = "Nessun pilota trovato :/"
    }
    else{
      console.log(this.lista_rider_champ)
      this.loading = false
      this.errore = ""
    }
  }


  lista_rider_Pole: Rider[] = []
  getAllRider_By_Pole()
  {
    this.allrider_Poles = true
    this.allrider_Champion = false
    this.allrider_ = false
    this.allrider_Nation = false
    this.allrider_Victory = false

    this.errore = ""
  }
  getAllByPole(nPole: HTMLInputElement)
  {
    this.loading = true
    this.obs = this.http.get<Rider[]>(this.url +"/MostPole/"+Number(nPole.value))
    this.obs.subscribe(this.getData_Pole)
    nPole.value = ""
  }
  getData_Pole = (d: Rider[]) =>
  {
    this.lista_rider_Pole = d
    if (this.lista_rider_Pole.length === 0){
      this.errore = "Nessun pilota trovato :/"
    }
    else{
      console.log(this.lista_rider_Pole)
      this.loading = false
      this.errore = ""
    }
  }


  lista_rider_Victory: Rider[] = []
  getAllRider_By_Victory()
  {
    this.allrider_Victory = true
    this.allrider_Champion = false
    this.allrider_ = false
    this.allrider_Nation = false
    this.allrider_Poles = false

    this.errore = ""
  }
  getAllByWin(nWin: HTMLInputElement)
  {
    this.loading = true
    this.obs = this.http.get<Rider[]>(this.url +"/MostWin/"+Number(nWin.value))
    this.obs.subscribe(this.getData_Win)
    nWin.value = ""
  }
  getData_Win = (d: Rider[]) =>
  {
    this.lista_rider_Victory = d
    if (this.lista_rider_Victory.length === 0){
      this.errore = "Nessun pilota trovato :/"
    }
    else{
      console.log(this.lista_rider_Victory)
      this.loading = false
      this.errore = ""
    }
  }


  lista_rider_Nations: Rider[] = []
  getAllRider_By_Nation()
  {
    this.allrider_Nation = true
    this.allrider_Victory = false
    this.allrider_Champion = false
    this.allrider_ = false
    this.allrider_Poles = false

    this.errore = ""
  }
  getAllByNaz(nazione: HTMLInputElement)
  {
    let newnat = nazione.value.toUpperCase()
    this.loading = true
    this.obs = this.http.get<Rider[]>(this.url +"/Nations/"+newnat)
    this.obs.subscribe(this.getData_Nation)
    nazione.value = ""
  }
  getData_Nation = (d: Rider[]) =>
  {
    this.lista_rider_Nations = d
    if (this.lista_rider_Nations.length === 0){
      this.errore = "Nessun pilota trovato :/"
    }
    else{
      console.log(this.lista_rider_Nations)
      this.loading = false
      this.errore = ""
    }
  }
}
