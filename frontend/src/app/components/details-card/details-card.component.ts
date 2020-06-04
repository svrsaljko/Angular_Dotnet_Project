import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { ICommand } from '../../interfaces/command';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {
  faEdit = faEdit;
  faWindowClose = faWindowClose;
  id: any;
  command: ICommand;
  // command: object;
  commandline: string;
  howTo: string;
  platform: string;

  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  //  NAPRAVIT INTERFACE?!
  ngOnInit() {
    this.http.getCommandById(this.id).subscribe(data => {
      // console.log('data', data.commandline);
      console.log('data from details:', data);
      this.command = data;

      if (data) {
        this.commandline = this.command.commandline;
        // console.log('commandline:::', this.commandline);
        this.howTo = this.command.howTo;
        this.platform = this.command.platform;
      }

      // console.log('command:', this.command);
    });
  }

  onDeleteClick = () => {
    console.log('id je:', this.id);
    this.http.deleteCommandById(this.id).subscribe(data => {
      console.log('data: ', data);
    });
  };
}
