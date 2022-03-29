import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {

  // string = "sõnaline muutuja";
  // number = 22;      //see läheb sinna ostukorv.componet.html
  // boolean = true;   //rangelt true or false


  constructor() {
    console.log("pannakse ostukorv construktor käima");
   }

  ngOnInit(): void {
    console.log("pannakse ostukorv ngOnInit käima")
  }
// korrutaKahega() {
//  this.number = this.number *2;    //ja siin on seesama number kasutatud
// }

// muudaBoolean() {
//   this.boolean = false;
// }

// muudaBoolean2() {
//   this.boolean = !this.boolean;   // ! tähendab vastupidist
// }
//funktsioon ei tööta kui ei ole () ja {}
//funktsiooni järgi on (), tähistavad millegi vastuvõtmist - HTMLst
//{} sulud func järel tähistavad selle func algust ja lõppu

ostukorviTooted = ["Coca-cola", "Fanta", "Sprite", "Vichy", "Vitamin Well", "Kali"];

kustutaToode(toode: any) {
  const j2rjekorraNumber = this.ostukorviTooted.indexOf(toode);   // indexOf leiab järjekorranumbri
  this.ostukorviTooted.splice(j2rjekorraNumber, 1);   // splice kustutab selle toote järjekorrast /1 tähendab et kustutaks vaid ühe toote
}

lisaToode(toode: any) {
  this.ostukorviTooted.push(toode);   // lükkab lõppu toote juurde
}

tyhjendaTooted() {
  this.ostukorviTooted = [];  // [] tühi array siis
}



}
