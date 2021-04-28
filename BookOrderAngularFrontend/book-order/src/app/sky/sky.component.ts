import { SkyService } from './../sky.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  constructor(private skyService: SkyService) { }

  ngOnInit() {
  }

}
