import { Component, OnInit } from '@angular/core';  //import node_module seest

@Component({    //tehakse komponentiks
  selector: 'app-avaleht',  //kuidas teda kasutusele võtta
  templateUrl: './avaleht.component.html',  //seotakse ära html
  styleUrls: ['./avaleht.component.css']    //seotakse ära css
})
export class AvalehtComponent implements OnInit {   //export - saaks importida
// class - funtsioon/muutuja/class
// AvalehtComponent - class nimetus
// implement OnInit - ei lase ngOnit
// massiiv / list / array

tooted = [
{nimi: "Coca cola", hind: 2, aktiivne: true},
{nimi: "Fanta", hind: 3 , aktiivne: true}, 
{nimi: "Sprite", hind: 2.5, aktiivne: true}, 
{nimi: "Vichy", hind: 4, aktiivne: true}, 
{nimi: "Vitamin well", hind: 6, aktiivne: true}]; // koosneb viiest elemendist



  constructor() {console.log("pannakse avaleht construktor käima") }

  ngOnInit(): void {console.log("pannakse avaleht ngOnInit käima")
  }

lisaOstukorvi(toode: any) {
  const ostukorvSS = sessionStorage.getItem("ostukorviTooted");
  let ostukorv = [];
  if (ostukorvSS !== null) {    // null = tühjus    !== ei võrdu
    ostukorv = JSON.parse(ostukorvSS);
      }
  ostukorv.push(toode);
 sessionStorage.setItem("ostukorviTooted", JSON.stringify(ostukorv));   //need lähevad sinna localhosti mällu brauseris
}     // JSON.stringify trükib välja selle toote nime, muidu oleks seal vaid object.object
      // JSON.stringify muudab stringiks ja parse muudab vastupidi
      // all this JSON bs we need to do because push doesn't push strings, but we need to save with strings
}
