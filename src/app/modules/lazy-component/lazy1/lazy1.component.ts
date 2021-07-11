import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/services/data.service';

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.scss']
})
export class Lazy1Component implements OnInit {

  Message: string = "";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //this.Message = this.dataService.Message;
  }

}
