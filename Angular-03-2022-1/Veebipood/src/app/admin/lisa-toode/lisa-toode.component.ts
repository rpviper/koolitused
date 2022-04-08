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
   if (vorm.valid) {
     let tooted = [];

     let tootedLS = localStorage.getItem("tooted");   // tootedLS on minu enda valik sõna, aga represendib siis et on vaja local storage jaoks
     if (tootedLS !== null) {
       tooted = JSON.parse(tootedLS);
     }

     tooted.push(vorm.value);
     localStorage.setItem("tooted", JSON.stringify(tooted));
   }
    // console.log(vorm.valid);
    // console.log(vorm.invalid);
    // console.log(vorm);
    // console.log(vorm.value)
    // console.log(vorm.value.nimi);
    // console.log(vorm.value.hind);
    // console.log(vorm.value.aktiivne);
    // console.log(vorm.value.suvaline);
  }
} 