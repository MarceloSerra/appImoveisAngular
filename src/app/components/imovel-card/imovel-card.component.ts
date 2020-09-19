import { Component, Input, OnInit } from '@angular/core';
import { ImovelModel } from 'src/app/services/imoveis-api/imovel-model';

@Component({
  selector: 'app-imovel-card',
  templateUrl: './imovel-card.component.html',
  styleUrls: ['./imovel-card.component.css']
})
export class ImovelCardComponent implements OnInit {


  @Input() imovel: ImovelModel;
  image:string;
  address:string;
  price:number;
  owner:string;
  type:string;


  constructor() { }

  ngOnInit(): void {

    if(this.imovel != null)
    {
      this.image = this.imovel.image;
      this.address = this.imovel.address;
      this.owner = this.imovel.owner;
      this.price = this.imovel.price;
      this.type = this.imovel.type;
    }

  }
}
