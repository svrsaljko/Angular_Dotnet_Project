import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICommand } from '../../interfaces/command';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.css']
})
export class AddCommandComponent implements OnInit {
  instructions = 'Input command data:';
  framework = '';
  // command: ICommand;
  constructor(private http: HttpService) {}

  ngOnInit() {}

  submitCommand = (commandForm: NgForm): void => {
    console.log('submit click');
    const { Command, Platform, HowTo } = commandForm.value;
    const command: ICommand = {
      commandline: Command,
      howTo: HowTo,
      platform: Platform,
      framework: this.framework
    };
    console.log('command: ', command);
    this.http
      .postSubmittedCommand(command)
      .subscribe(data => console.log('after POST', data));
  };

  onFrameworkClick = (color: string, e: Event) => {
    console.log('on framework click');
    const angular = 'angular';
    const dotnet = 'dotnet';
    const idAngularButton = document.getElementById('idAngularButton');
    const idDotnetButton = document.getElementById('idDotnetButton');
    const idInstructions = document.getElementById('idInstructions');
    const idContainer = document.getElementById('idContainer');
    const idRow = document.getElementById('idRow');
    const idRow1 = document.getElementById('idRow1');
    const idRow2 = document.getElementById('idRow2');
    const idInput = document.getElementById('idInput');
    const idInput1 = document.getElementById('idInput1');
    const idInput2 = document.getElementById('idInput2');
    const idLabel = document.getElementById('idLabel');
    const idLabel1 = document.getElementById('idLabel1');
    const idLabel2 = document.getElementById('idLabel2');

    if (color.includes(dotnet)) {
      this.framework = dotnet;
      idDotnetButton.style.color = `${color}`;
      idAngularButton.style.color = 'gray';
    } else if (color.includes(angular)) {
      this.framework = angular;
      idAngularButton.style.color = `${color}`;
      idDotnetButton.style.color = 'gray';
    }
    idAngularButton.style.borderRight = `3px solid ${color}`;
    idDotnetButton.style.borderLeft = `3px solid ${color}`;
    idInstructions.style.color = `${color}`;
    idContainer.style.border = `3px solid ${color}`;
    idRow.style.borderBottom = `3px solid ${color}`;
    idRow1.style.borderBottom = `3px solid ${color}`;
    idRow2.style.borderBottom = `3px solid ${color}`;
    idInput.style.border = `1px solid  ${color}`;
    idInput1.style.border = `1px solid  ${color}`;
    idInput2.style.border = `1px solid  ${color}`;
    idLabel.style.color = `${color}`;
    idLabel1.style.color = `${color}`;
    idLabel2.style.color = `${color}`;
    // document.documentElement.style.setProperty('border', '3px solid gray');
    e.preventDefault();
  };
}
