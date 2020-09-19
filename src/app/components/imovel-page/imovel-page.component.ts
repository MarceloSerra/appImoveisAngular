import { Component, OnInit } from '@angular/core';
import { ImoveisApiService } from 'src/app/services/imoveis-api/imoveis-api.service';
import { ImovelModel } from 'src/app/services/imoveis-api/imovel-model';

@Component({
  selector: 'app-imovel-page',
  templateUrl: './imovel-page.component.html',
  styleUrls: ['./imovel-page.component.css']
})
export class ImovelPageComponent implements OnInit {

  constructor(private imovelApi:ImoveisApiService) { }

  listaImoveis: ImovelModel[];

  ngOnInit(): void {

    this.imovelApi.listImovel().subscribe((lista) =>
    {
      this.listaImoveis = lista;
    });

  }

}
