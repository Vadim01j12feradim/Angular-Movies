import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { ReasonsComponent } from './reasons/reasons.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent, HeaderComponent, SugerenciasComponent,ReasonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie';
}
