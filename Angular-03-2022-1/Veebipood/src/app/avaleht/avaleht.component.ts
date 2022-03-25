import { Component, OnInit } from '@angular/core';  //import node_module seest

@Component({    //tehakse komponentiks
  selector: 'app-avaleht',  //kuidas teda kasutusele võtta
  templateUrl: './avaleht.component.html',  //seotakse ära html
  styleUrls: ['./avaleht.component.css']    //seotakse ära css
})
export class AvalehtComponent implements OnInit {   //export - saaks importida
//class - funtsioon/muutuja/class
//AvalehtComponent - class nimetus
//implement OnInit - ei lase ngOnit

  constructor() {console.log("pannakse avaleht construktor käima") }

  ngOnInit(): void {console.log("pannakse avaleht ngOnInit käima")
  }

}
