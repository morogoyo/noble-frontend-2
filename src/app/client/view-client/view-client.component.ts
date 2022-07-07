import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../shared/services/client/client.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {

  clients;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    this.clientService.getClients().subscribe((data) => {
      console.log('this is the getAllClients() that is giving me shit ');
      console.log( data);
      this.clients = data;
    });
  }
}
