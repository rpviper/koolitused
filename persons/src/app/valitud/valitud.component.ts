import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valitud',
  templateUrl: './valitud.component.html',
  styleUrls: ['./valitud.component.css']
})
export class ValitudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  iga = 0;
  age = 0;
  inimesed = [
    {"id" : 1,
    "name": "Leanna Graham",
    "vanus": 34,
    "username": "Bret",
    "email": "leanna@lean.com"
  },
  {"id" : 2,
  "name": "Ervin Howell",
  "vanus": 54,
  "username": "Erho",
  "email": "erwinhow@howell.com"
},
{"id" : 3,
"name": "Clementine Bauch",
"vanus": 31,
"username": "Clemms",
"email": "clementine.bach@hot.ee"
},
{"id" : 4,
"name": "Patrcicia Lebshak",
"vanus": 21,
"username": "Patrick",
"email": "patricia@lech.ee"
},
{"id" : 5,
"name": "Chelsey Dietrich",
"vanus": 42,
"username": "Dietta",
"email": "chelsey.dietra@hotmail.com"
},
{"id" : 6,
"name": "Dennish Shulz",
"vanus": 55,
"username": "Dennist",
"email": "dennis.dennis@hot.ee"
},
{"id" : 7,
"name": "Kurtis Weiss",
"vanus": 19,
"username": "Kurtis23",
"email": "kuurtisiscool@hot.ee"
},
{"id" : 8,
"name": "Nicholas Runofski",
"vanus": 39,
"username": "maxime_nieche",
"email": "maxime.max@hotmail.com"
},
{"id" : 9,
"name": "Glenna Reichem",
"vanus": 27,
"username": "BreGleNNt",
"email": "glenniscool@hotmail.com"
},
{"id" : 10,
"name": "Clementina Weiss",
"vanus": 28,
"username": "cleMnDsAt",
"email": "clementia@dementia.com"
}
  ]

lisaInimene(person: any) {
  this.inimesed.push(person);
  this.vanusKokku();
  this.keskmineVanus()
}

kustutaInimene(person: any) {
  const j6rjeKorraNumber = this.inimesed.indexOf(person);
  this.inimesed.splice(j6rjeKorraNumber, 1)
  this.vanusKokku();
  this.keskmineVanus()
}

tyhjenda() {
  this.inimesed = [];
  this.vanusKokku();
  this.keskmineVanus()
}

vanusKokku() {
    this.iga = 0;
    this.inimesed.forEach(element => this.iga = this.iga + element.vanus)
  }

  keskmineVanus() {
    this.age = 0;
    this.inimesed.forEach(element => this.age = this.age + element.vanus / this.inimesed.length)
  }

}
