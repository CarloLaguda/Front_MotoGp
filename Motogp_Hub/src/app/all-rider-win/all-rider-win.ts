import { Component, Input } from '@angular/core';
import { Rider } from '../Models/rider.model';

@Component({
  selector: 'app-all-rider-win',
  imports: [],
  templateUrl: './all-rider-win.html',
  styleUrl: './all-rider-win.css'
})
export class AllRiderWin {
  @Input() pilota!: Rider
}
