import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource, MatTableModule} from "@angular/material/table";
import {Participant} from "../../../models/Participant";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {ParticipantService} from "../../../services/participant/participant.service";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [
    MatFormField,
    MatTable,
    MatPaginator,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent implements AfterViewInit{

  participants:Participant[]=[]


  displayedColumns: string[] =
    ['id', 'firstName', 'lastName', 'marathonCenterName', 'ranking', 'recordTime'];


  dataSource: MatTableDataSource<Participant>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private _participantService:ParticipantService) {

    this.dataSource = new MatTableDataSource( this.participants );

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getAll();
  }

  getAll(){
    this._participantService.getAllParticipants().subscribe((response:any)=>{
      this.participants = response

      this.dataSource = new MatTableDataSource( this.participants );

      this.whenUpdateParticipantsList();
    })
  }

  whenUpdateParticipantsList(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }






}
