import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { QuestionsComponent } from './questions/questions.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [QuestionsComponent,RouterOutlet,FooterComponent, HeaderComponent, SugerenciasComponent,ReasonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'movie';
  ngOnInit(): void {
    initFlowbite()
  }
}
