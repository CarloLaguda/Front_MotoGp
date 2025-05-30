import { Component, Input } from '@angular/core';
import { Rider } from '../Models/rider.model';

@Component({
  selector: 'app-all-rider-champ',
  imports: [],
  templateUrl: './all-rider-champ.html',
  styleUrl: './all-rider-champ.css'
})
export class AllRiderChamp {
  @Input() pilota!: Rider
}
