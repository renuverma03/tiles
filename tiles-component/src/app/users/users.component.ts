import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: false
})

export class UsersComponent {
  userList: any;
  item:any;
  isExpendable = false;
  itemIndex = '';
  width='500px';
  height='100px';
  constructor() { }

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        this.userList = data;
        console.log(this.userList)
      })
  }

  showDetails(row:any,i:any){
    this.isExpendable = !this.isExpendable ;
    this.item = row;
    this.itemIndex = i
    console.log(this.item)
  }

}
