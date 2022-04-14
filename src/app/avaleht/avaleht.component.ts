import { HttpClient } from '@angular/common/http';
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

tooted: any[] = [];

// tooted = [    // kui ei ole arrays tooteid, saad teha tooted: any = []; ja teeb sama välja
// {nimi: "Coca cola", hind: 2, aktiivne: true},
// {nimi: "Fanta", hind: 3 , aktiivne: true},   // need kaks
// {nimi: "Sprite", hind: 2.5, aktiivne: true},  // ei näita avalehel, saad varjata
// {nimi: "Vichy", hind: 4, aktiivne: true}, 
// {nimi: "Vitamin well", hind: 6, aktiivne: true}
// ]; // koosneb viiest elemendist



  constructor(private http: HttpClient)   // siia sisse pidin panema selle http värgi, muidu ei tööta
  {console.log("pannakse avaleht construktor käima") }  // constructor on erinevate failide segamiseks

  ngOnInit(): void {console.log("pannakse avaleht ngOnInit käima")  // käimaminemise funktsioon

  // const tootedLS = localStorage.getItem("tooted");   // tootedLS on minu enda valik sõna, aga represendib siis et on vaja local storage jaoks
  // if (tootedLS) {
  //   this.tooted = JSON.parse(tootedLS);
  // } SEE OLI KÕIK VAID NÄIDE LOCALSTOREGIST

  this.http.get<any>
  ("https://rainokoolitused-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
              .subscribe(tootedAndmebaasist => { 
  const uusMassiiv = [];
  for (const key in tootedAndmebaasist) {
    uusMassiiv.push(tootedAndmebaasist[key]);
  }
  this.tooted = uusMassiiv;
})
  }

lisaOstukorvi(toode: any) {
  const ostukorvSS = sessionStorage.getItem("ostukorviTooted");
  let ostukorv = [];
  if (ostukorvSS !== null) {    // null = tühjus    !== ei võrdu
    ostukorv = JSON.parse(ostukorvSS);
      }
  ostukorv.push(toode);
 sessionStorage.setItem("ostukorviTooted", JSON.stringify(ostukorv));   //need lähevad sinna localhosti mällu brauseris
}     // JSON.stringify trükib välja selle toote nime, muidu oleks seal vaid object.object (brauseris)
      // JSON.stringify muudab stringiks ja parse muudab vastupidi
      // all this JSON bs we need to do because push doesn't push strings, but we need to save with strings
      // see JSON jama on ainult brauseri jaoks vaja sessiooni jaoks



}
