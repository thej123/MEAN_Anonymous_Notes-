import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from './../../task.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  // notes;
  @Input() newNote 

  constructor(private _taskService: TaskService) { 
    // this._taskService.retrieveAll((stuff) => {
    //   this.notes = stuff;
    // })
  }

  ngOnInit() {
  }

}
