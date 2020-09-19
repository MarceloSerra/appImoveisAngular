import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hellocomp',
  templateUrl: './hellocomp.component.html',
  styleUrls: ['./hellocomp.component.css']
})
export class HellocompComponent implements OnInit {

  title:string = 'My first Component';
  dados:string;
  imgUrl:string = './assets/img-1.jpg';
  showImage:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  run() :void
  {
    this.title = this.dados;
  }

}
