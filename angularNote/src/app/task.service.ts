import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  retrieveAll(callback) {
    // console.log("1")
    this._http.get('/notes').subscribe(
      (response) => {
        callback(response.json());
        // console.log("2")        
      },
      (error) => {
        console.log("could not retrive all data", error)
      }
    );
  }

  createNote(note, callback) {
    console.log("in taskserv",note)
    return this._http.post('/notes', note).subscribe(
      (response) => {
        console.log("note sent to base", response);
        callback()
      },
      (error) => {
        console.log("could not add note", error);
      }
    );
  }


}
