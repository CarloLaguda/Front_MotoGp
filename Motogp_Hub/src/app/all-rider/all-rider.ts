import { Component, Input } from '@angular/core';
import { Rider } from '../Models/rider.model';

@Component({
  selector: 'app-all-rider',
  imports: [],
  templateUrl: './all-rider.html',
  styleUrl: './all-rider.css'
})
export class AllRider {
  @Input() pilota!: Rider
}
