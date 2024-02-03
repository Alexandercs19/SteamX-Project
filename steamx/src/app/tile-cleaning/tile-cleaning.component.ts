import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router'

@Component({
  selector: 'app-tile-cleaning',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './tile-cleaning.component.html',
  styleUrl: './tile-cleaning.component.css'
})
export class TileCleaningComponent {

}
