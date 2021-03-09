import { Component } from "@angular/core";


@Component({

  selector:'app-propert-card',
  //template:'<h1>I am a Card</h1>',
  templateUrl:'propert-card-component.html',
  //styles:['h1{font-weight:normal;}']
  styleUrls:['propert-card-component.css']
})
export class PropertyCardComponent{
Property:any={

  "Id":1,
  "Type":"House",
  "Name":"Birla House",
  "Price":12000
}

}
