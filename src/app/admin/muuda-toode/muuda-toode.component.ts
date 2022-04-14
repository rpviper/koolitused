import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {

  toode: any;
  muutmiseVorm: any;
  private tooted: any[] =[]; // ei näita seda HTML-s

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      // location.href === http://localhost:4200/admin/muuda/Coca Cola
    // location.href.split("muuda/") === ["http://localhost:4200/admin/", "coca-cola"];
    // location.href.split("muuda/")[0] === "http://localhost:4200/admin/";
    // location.href.split("muuda/")[1] === "coca-cola";
    const tooteNimi = location.href.split("muuda/")[1];   // võtame URL-st tootenime
    // const tootedLS = localStorage.getItem("tooted");    // võtame localStorage kõik tooted
    // if (tootedLS) {                                    // kontrollime et on tooted olemas localStorages
    //   const tooted: any[] = JSON.parse(tootedLS);     // võtame localStoragelt saadult jutumärgid ära
    this.http.get<any>
    ("https://rainokoolitused-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
                .subscribe(tootedAndmebaasist => { // asünkroonne ehk lubab koodil edasi minna
    const uusMassiiv = [];
    for (const key in tootedAndmebaasist) {
      uusMassiiv.push(tootedAndmebaasist[key]);
    }
  this.tooted = uusMassiiv;
  this.toode = this.tooted.find(element => element.nimi
    .replaceAll(' ', '-').toLowerCase() === tooteNimi);
    this.muutmiseVorm = new FormGroup({   // luuakse vorm.ts sees, seega new FormGroup
      nimi: new FormControl(this.toode.nimi),    // vasakul oleva võtmega HTML-i
      hind: new FormControl(this.toode.hind),    // paremal pool tehakse vormi inputi kontroll (ligipääs) valmis
      aktiivne: new FormControl(this.toode.aktiivne) // mida on võimalik lugeda-muuta
      // see on kõik selle jaoks et ei peaks muutmise ajal kõike jälle otsast peale trükkima
    });
})
     
    }
    muudaToode() {
      const j2rjeKorraNumber = this.tooted.indexOf(this.toode);
      this.tooted[j2rjeKorraNumber] = this.muutmiseVorm.value;
      this.http.put("https://rainokoolitused-default-rtdb.europe-west1.firebasedatabase.app/tooted.json", this.tooted).subscribe();

    }
  }

 


