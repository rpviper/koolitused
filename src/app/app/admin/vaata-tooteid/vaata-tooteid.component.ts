import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {

  tooted = [
    {nimi: "Coca cola", hind: 2, aktiivne: true},
    {nimi: "Fanta", hind: 3 , aktiivne: true},   // need kaks
    {nimi: "Sprite", hind: 2.5, aktiivne: false},  // ei näita avalehel, saad varjata
    {nimi: "Vichy", hind: 4, aktiivne: true}, 
    {nimi: "Vitamin well", hind: 6, aktiivne: true}
  ]; // koosneb viiest elemendist
    

  constructor() { }

  ngOnInit(): void {
  }

  kustutaToode(toode: any) {
    const j2rjekorraNumber = this.tooted.indexOf(toode);   
    this.tooted.splice(j2rjekorraNumber, 1);   
  }


}
