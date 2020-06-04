import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

import { ICommand } from '../interfaces/command';

const COMMAND_URL = 'http://localhost:5000/api/commands';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getAllCommands() {
    return this.http.get<ICommand[]>(COMMAND_URL);
  }
  getCommandById(id: any) {
    return this.http.get<ICommand>(`${COMMAND_URL}/${id}`);
  }
  postSubmittedCommand(command: ICommand) {
    return this.http.post<ICommand>(COMMAND_URL, command, httpOptions);
  }
  deleteCommandById(id: number) {
    return this.http.delete<ICommand>(`${COMMAND_URL}/${id}`);
  }
}
