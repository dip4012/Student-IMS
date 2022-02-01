import { Component, OnInit } from '@angular/core';
import { IconResolver } from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  Roll: number;
  Dept: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: '1', Roll: 12, Dept: 'CSE' },
  { position: 2, name: '2', Roll: 4, Dept: 'CSE' },
  { position: 3, name: '3', Roll: 6, Dept: 'IT' },
  { position: 4, name: '4', Roll: 9, Dept: 'CSE' },
  { position: 5, name: '5', Roll: 1, Dept: 'ECE' },
  { position: 6, name: '6', Roll: 1, Dept: 'ECE' },
  { position: 7, name: '7', Roll: 1, Dept: 'IT' },
  { position: 8, name: '8', Roll: 15, Dept: 'EE' },
  { position: 9, name: '9', Roll: 18, Dept: 'ME' },
  { position: 10, name: '10', Roll: 19, Dept: 'EE' },
];
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'Roll', 'Dept'];
  dataSource = ELEMENT_DATA;

}

