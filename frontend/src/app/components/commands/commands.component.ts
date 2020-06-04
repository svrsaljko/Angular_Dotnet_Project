import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {
  commands: object;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getAllCommands().subscribe(data => {
      this.commands = data;
    });
  }

  changeRoute(commandId: number) {
    console.log('commandId', commandId);
  }
}
