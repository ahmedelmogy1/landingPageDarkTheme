import { Component } from '@angular/core';
import { IFeatures } from '../../interfaces/ifeatures';
import { GlowMaskDirective } from '../../directives/glow-mask.directive';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [GlowMaskDirective],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {
features:IFeatures[]=[{
  titel:'Integration Ecosystem',
  description:'Enhance your Productivfity by conncting with your tools ,  keeping your esssentional is one place .'
},
{
  titel:'Goal setting and Traking ',
  description:'Define and track your goals , breaking down objectives into achievable tasks to keep your targets in sight .'
},
{
  titel:'Sourcfe Data Encryption',
  description:'with end-to-end encryption , your data is securely stored and protected from unautorized access. '
}
]
}
