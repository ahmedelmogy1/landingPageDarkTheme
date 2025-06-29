import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { LogoTickerComponent } from "./components/logo-ticker/logo-ticker.component";
import { FeatureComponent } from "./components/feature/feature.component";
import { ProductComponent } from "./components/product/product.component";
import { FAQsComponent } from "./components/faqs/faqs.component";
import { CallComponent } from "./components/call/call.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, LogoTickerComponent, FeatureComponent, ProductComponent, FAQsComponent, CallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Portfolio';

}
