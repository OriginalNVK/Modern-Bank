import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-calculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  onClickValue(value: string, type: any): void{
  console.log(value, type);
  }
}
