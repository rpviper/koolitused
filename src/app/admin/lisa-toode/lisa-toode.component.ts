import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lisa(vorm: any) {   // siin on vorm aga HTML on lisavorm, ei tähenda, siia võid mida iganes panna
   if (vorm.valid) {    // see tegelikult selle jaoks hea kui HTML-s on pandud vormi sisestus disable (aka ei muutu halliks sisestamise nupp)
     let tooted = [];

     let tootedLS = localStorage.getItem("tooted");   // tootedLS on minu enda valik sõna, aga represendib siis et on vaja local storage jaoks
     if (tootedLS) {
       tooted = JSON.parse(tootedLS);
     }

     tooted.push(vorm.value);   // vomr.value tähendab et ta tuleb sellises formis: {nimi: "minginimi", hind: 123, aktiivne: true}
     localStorage.setItem("tooted", JSON.stringify(tooted));  // styringify on vaja sest browser nõuab stringe aka jutumärke
   }  // if-i lõpp
  }   // funktsiooni lõpp
}     // classi lõpp