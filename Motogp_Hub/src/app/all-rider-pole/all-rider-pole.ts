import { Component, Input } from '@angular/core';
import { Rider } from '../Models/rider.model';

@Component({
  selector: 'app-all-rider-pole',
  imports: [],
  templateUrl: './all-rider-pole.html',
  styleUrl: './all-rider-pole.css'
})
export class AllRiderPole {
  @Input() pilota!: Rider
}
