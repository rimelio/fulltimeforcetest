import { Component } from '@angular/core';
import { AppService } from './app.service';

interface Commit{
  author: string,
  date: string,
  message: string,
  commit: string,
  link: string,
  bio: string,
}

@Component({
  selector: 'app-root',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'front';
  constructor(private appSvc: AppService){

  }

  ngOnInit(){
    console.log('Hola')
    this.getCommits()
  }
  commits: Commit[] = []

  getCommits(){
    this.appSvc.getCommits().subscribe(result =>{
      this.commits = [...result];
    }
    )
  }
}
