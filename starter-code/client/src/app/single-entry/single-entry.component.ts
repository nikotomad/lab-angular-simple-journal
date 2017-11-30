import { Component, OnInit } from '@angular/core';
import { JournalserviceService } from '../journalservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entry:any;

   constructor( public router:Router, public journal:JournalserviceService, public route:ActivatedRoute){
     route.params.subscribe(params => {
       journal.getSingleEntry(params['id']).subscribe(entry => this.entry = entry);
     })
   }

  ngOnInit() {
  }

}
