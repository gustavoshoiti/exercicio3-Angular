import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorInput = '';
  valorInput2 = 0;
  title = 'angular-exercicio3';

  alterarValor(event: any): void{
       this.valorInput = event.target.value;
       console.log(this.valorInput)
  }
  plus_one(): void{
    this.valorInput2 = this.valorInput2 +1;
  }
  minus_one(): void{
    this.valorInput2 = this.valorInput2 - 1;;
  }
}
