import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ff-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css'],
})

export class ProjectsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  close(message :string) {
    console.log(message);
  }

}
