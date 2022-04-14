import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {

  tooted: any[] = [
    // {nimi: "Coca cola", hind: 2, aktiivne: true},
    // {nimi: "Fanta", hind: 3 , aktiivne: true},   // need kaks, kui on aktiivne: false
    // {nimi: "Sprite", hind: 2.5, aktiivne: true},  // ei näita avalehel, saad varjata
    // {nimi: "Vichy", hind: 4, aktiivne: true}, 
    // {nimi: "Vitamin well", hind: 6, aktiivne: true}
  ]; // koosneb viiest elemendist
    

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // let tootedLS = localStorage.getItem("tooted");   // tootedLS on minu enda valik sõna, aga represendib siis et on vaja local storage jaoks
    //  if (tootedLS !== null) {
    //    this.tooted = JSON.parse(tootedLS);
    //  }
    this.http.get<any>("https://rainokoolitused-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")  // see tuli firebasist
.subscribe(tootedAndmebaasist => {this.tooted = tootedAndmebaasist
const uusMassiiv = [];
for (const key in tootedAndmebaasist) {
 uusMassiiv.push(tootedAndmebaasist[key]);
}
  this.tooted = uusMassiiv;
})
  }

  kustutaToode(toode: any) {
    const j2rjekorraNumber = this.tooted.indexOf(toode);   
    this.tooted.splice(j2rjekorraNumber, 1);  
    localStorage.setItem("tooted", JSON.stringify(this.tooted)); 

    this.http.put("https://rainokoolitused-default-rtdb.europe-west1.firebasedatabase.app/tooted.json", this.tooted).subscribe();
 
  }


}
