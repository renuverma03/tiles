import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css'],
  standalone: false
})

export class TilesComponent {
  @Input() set setData(item:any){
    // this.title =item.id;
    this.content=item.title;
  }
  @Input() width='auto';
  @Input() height='auto';
  
  constructor() { }
  
  title ='';
  content='';
  ngOnInit() {
    
  }

}
