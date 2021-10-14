
import { Component } from '@angular/core'
@Component(
  {
    selector:'app-property-card',
    // template:'<h1> hey this card <h2>',
    //styles:['h1{font-weight:normal;}'],
    templateUrl:'PropertyCard.Component.html',
    styleUrls:['PropertyCard.Component.css']

  }
)
export class PropertyCardClassComponent{

Property:any={
"Id":1,
"Name":"Birla House",
"Type":"House",
"Price":1200

}

}
