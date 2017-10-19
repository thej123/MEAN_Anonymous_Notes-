import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-main-create',
  templateUrl: './main-create.component.html',
  styleUrls: ['./main-create.component.css']
})
export class MainCreateComponent implements OnInit {

  noteobject = {
    note: ''
  }
  updatednotes;

  constructor(private _taskService: TaskService) {
    this._taskService.retrieveAll((stuff) => {
      this.updatednotes = stuff;
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    this._taskService.createNote(this.noteobject, (hi) => {
      this._taskService.retrieveAll((a) => {
        console.log("will this work??")
        this.updatednotes = a;
      })
    })
    
    // this.noteobject.note = '';
  }

}
