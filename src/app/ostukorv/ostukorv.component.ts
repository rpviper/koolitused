import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jsDocComment } from '@angular/compiler';
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

  ostukorviTooted: any[] = []; 
  koguSumma = 0;

  constructor(private http: HttpClient) {}    // constructori töö on angulari koodilõikude ühendamine selle component külge

  ngOnInit(): void {
    console.log("pannakse ostukorv ngOnInit käima")

    const ostukorvSS = sessionStorage.getItem("ostukorviTooted");
    if (ostukorvSS !== null) {
      this.ostukorviTooted = JSON.parse(ostukorvSS);
      this.arvutaKogusumma();   // pidin siia need panema, v muidu ei tööta kohe kui lehele lähen alguses
    }
    
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


// kuidas teha kokkuliitmist
// const array1 = [{n:'a', h: 2}, {n:'b', h: 4}, {n:'c', h: 3}];
// 'a' => console.log('a');
// 'b' => console.log('b');
// 'c' => console.log('c');
// {n:'a', h: 2} => kogusumma = kogusumma + element.h;
// {n:'b', h: 4} => kogusumma = kogusumma + element.h;
// {n:'c', h: 3} => kogusumma = kogusumma + element.h;
// let kogusumma = 0;
// array1.forEach(element => kogusumma = kogusumma + element.h);
// console.log(kogusumma);


kustutaToode(t: any) {
  const j2rjekorraNumber = this.ostukorviTooted.indexOf(t);   // indexOf leiab järjekorranumbri
  this.ostukorviTooted.splice(j2rjekorraNumber, 1);   // splice kustutab selle toote järjekorrast /1 tähendab et kustutaks vaid ühe toote
  sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted));
  this.arvutaKogusumma();
}

lisaToode(t: any) {
  this.ostukorviTooted.push(t);   // lükkab lõppu toote juurde
  sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted));
  this.arvutaKogusumma();
}

tyhjendaTooted() {
  this.ostukorviTooted = [];  // [] tühi array siis
  sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted));
  this.arvutaKogusumma();
}

private arvutaKogusumma() {
  this.koguSumma = 0;
  this.ostukorviTooted.forEach(element => this.koguSumma = this.koguSumma + element.hind)
  // element on mu enda valida sõna, selle funktsiooni töö on koguhind teha
}

maksma() {
  const makseAndmed = {                 // see tuli postman-st
    "api_username": "92ddcfab96e34a5f",
    "account_name": "EUR3D1",
    "amount": this.koguSumma,
    "order_reference": Math.random() * 100,   // see viimane osa on lihtsalt et oleks rohkem random
    "nonce": "a43h" + new Date() + Math.random() * 2,
    "timestamp": new Date(),
    "customer_url": "https://angularveebipood.web.app"  // see on see firebase leht, kuhu siis peaks tagasi suunama
    }

    const headers = {
      headers: new HttpHeaders(   // tuli headers generaters, see password sealt every payst
        {
          "Authorization": 
          "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
        }
      )
    };
    this.http.post<any>("https://igw-demo.every-pay.com/api/v4/payments/oneoff",  // see tuli postman-st
    makseAndmed, 
    headers).subscribe(tagastus => location.href = tagastus.payment_link)   
}

}
