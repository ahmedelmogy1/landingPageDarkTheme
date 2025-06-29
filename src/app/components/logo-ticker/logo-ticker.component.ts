import { Component } from '@angular/core';
import { Iimges } from '../../interfaces/iimges';

@Component({
  selector: 'app-logo-ticker',
  standalone: true,
  imports: [],
  templateUrl: './logo-ticker.component.html',
  styleUrl: './logo-ticker.component.css'
})
export class LogoTickerComponent {
  imges: Iimges[] = [
    { src: './assets/images/celestial.png', alt: 'celestial' },
    { src: './assets/images/echo.png', alt: 'echo' },
    { src: './assets/images/quantum.png', alt: 'quantum' },
    { src: './assets/images/pulse.png', alt: 'pulse' },
    { src: './assets/images/acme.png', alt: 'acme' },
    { src: './assets/images/apex.png', alt: 'apex' },
    { src: './assets/images/celestial.png', alt: 'celestial' },
    { src: './assets/images/echo.png', alt: 'echo' },
    { src: './assets/images/quantum.png', alt: 'quantum' },
    { src: './assets/images/pulse.png', alt: 'pulse' },
    { src: './assets/images/acme.png', alt: 'acme' },
    { src: './assets/images/apex.png', alt: 'apex' },
  
  ]
}
