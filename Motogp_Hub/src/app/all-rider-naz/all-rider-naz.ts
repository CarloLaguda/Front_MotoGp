import { Component, Input } from '@angular/core';
import { Rider } from '../Models/rider.model';

@Component({
  selector: 'app-all-rider-naz',
  imports: [],
  templateUrl: './all-rider-naz.html',
  styleUrl: './all-rider-naz.css'
})
export class AllRiderNaz {
  @Input() pilota!: Rider
}
