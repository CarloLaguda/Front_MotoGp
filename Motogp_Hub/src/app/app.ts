import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Rider } from './Models/rider.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'Motogp_Hub';
  loading!: boolean
  obs!: Observable<Rider[]>
  lista_rider: Rider[] = []
  constructor(public http: HttpClient){}
  get_Riders(){
    this.loading = true
    this.obs = this.http.get<Rider[]>("https://5000-carlolaguda-gitpodmysql-2gtdtoaluwj.ws-eu120.gitpod.io")
    this.obs.subscribe(this.getData)
  }

  getData = (d: Rider[]) =>
  {
    this.lista_rider = d
    console.log(this.lista_rider)
    this.loading = false
  }
  stampaPiloti(){}
  
  ngOnInit(): void {
    this.get_Riders()
  }

  
}
