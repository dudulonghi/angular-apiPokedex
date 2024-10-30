import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FormsModule],
  
  template: `
  <h1> Aula de Services</h1>
  <app-card></app-card>
  <router-outlet />`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotas';
}
