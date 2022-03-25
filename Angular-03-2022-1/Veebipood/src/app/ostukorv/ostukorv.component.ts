import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {

  string = "sõnaline muutuja";
  number = 22;      //see läheb sinna ostukorv.componet.html
  boolean = true;   //rangelt true or false


  constructor() {
    console.log("pannakse ostukorv construktor käima");
   }

  ngOnInit(): void {
    console.log("pannakse ostukorv ngOnInit käima")
  }
korrutaKahega() {
 this.number = this.number *2;    //ja siin on seesama number kasutatud
}

muudaBoolean() {
  this.boolean = false;
}

muudaBoolean2() {
  this.boolean = !this.boolean;   // ! tähendab vastupidist
}
//funktsioon ei tööta kui ei ole () ja {}
//funktsiooni järgi on (), tähistavad millegi vastuvõtmist - HTMLst
//{} sulud func järel tähistavad selle func algust ja lõppu
}
