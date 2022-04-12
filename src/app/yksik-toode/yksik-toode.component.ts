import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yksik-toode',
  templateUrl: './yksik-toode.component.html',
  styleUrls: ['./yksik-toode.component.css']
})
export class YksikToodeComponent implements OnInit {

  toode: any;

  constructor() { }

  ngOnInit(): void {
    const tooteNimi = location.href.split("toode/")[1];   // see [1] tähendab et toode/ on 0 ja mis iganes tuleb pärast seda siis

    let tootedLS = localStorage.getItem("tooted");   // tootedLS on minu enda valik sõna, aga represendib siis et on vaja local storage jaoks
     if (tootedLS) {                               // tootedLS !== null
       const tooted: any[] = JSON.parse(tootedLS);

       this.toode = tooted.find(element => element.nimi.replaceAll(" ", "-").toLowerCase() === tooteNimi);
     }    // element.nimi me peame panema selle replaceAll sinna sest tooteNimi on muidu suure tähega, tühikutega jne jne
  }

}
