import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upho-cleaning',
  standalone: true,
  imports: [CommonModule, MatSliderModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './upho-cleaning.component.html',
  styleUrl: './upho-cleaning.component.css'
})
export class UphoCleaningComponent {
  opacityValue = 0.5;
}
