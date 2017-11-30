import { Component, OnInit } from '@angular/core';
import { JournalserviceService } from '../journalservice.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries:Array<any> = [];

  constructor(public journal: JournalserviceService) {
    this.journal.getEntriesList().subscribe( list => {
      this.entries = list;
    })
  }

  ngOnInit() {
  }

}
