import { Component } from '@angular/core';

incluir(): void {
  this.controleLivros.incluir(this.livro).then(() => this.router.navigateByUrl("/lista"));
}


@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent {

}
