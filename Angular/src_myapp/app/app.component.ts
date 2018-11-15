import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  pname='somename';
  num=1;  
  isValid = false;

  all_users = [{name:'user1',age:20},
  {name:'user2',age:22},
  {name:'user3',age:23},
  {name:'user4',age:24},
  {name:'user5',age:25}]

  users=[new User('name1111',23),
        new User('name2222',45),
        new User('name3333',33),
        new User('name4444',55)]

  points=['aasdg','arrashdhf','aa','aaa','yrtryr']
  finput;
  constructor()
  {
   // setInterval(()=>this.all_users.push({name:'aaaa',age:18}),2000);
  }

  //btnClicked(){
    //alert('can you see this');
    //this.num+=1;
    //this.pname = "raimaa";
 // }

 btnClicked()
 {
   this.isValid=!this.isValid;
 }

}

export class User{

  constructor(public name:string,public age:number)
  {

  }
}
