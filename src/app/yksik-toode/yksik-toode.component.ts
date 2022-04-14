import { HttpClient } from '@angular/common/http';
import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yksik-toode',
  templateUrl: './yksik-toode.component.html',
  styleUrls: ['./yksik-toode.component.css']
})
export class YksikToodeComponent implements OnInit {

  toode: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const tooteNimi = location.href.split("toode/")[1];   // see [1] tähendab et toode/ on 0 ja mis iganes tuleb pärast seda siis

    // let tootedLS = localStorage.getItem("tooted");   // tootedLS on minu enda valik sõna, aga represendib siis et on vaja local storage jaoks
    //  if (tootedLS) {                               // tootedLS !== null
    //    const tooted: any[] = JSON.parse(tootedLS);
    this.http.get<any>
      ("https://rainokoolitused-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
                  .subscribe(tootedAndmebaasist => { // asünkroonne ehk lubab koodil edasi minna
      const uusMassiiv = [];
      for (const key in tootedAndmebaasist) {
        uusMassiiv.push(tootedAndmebaasist[key]);
      }
const tooted = uusMassiiv;
      this.toode = tooted.find(element => 
        element.nimi.replaceAll(" ", "-").toLowerCase() === tooteNimi);
        console.log(this.toode); // undefined
    })
    // }
    
    
  }

}
      


