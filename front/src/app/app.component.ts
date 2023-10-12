import { Component } from '@angular/core';
import { AppService } from './app.service';
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
  commits: any[] = []

  getCommits(){
    this.appSvc.getCommits().subscribe(result =>{
      result.forEach((i: any) => {
        this.commits.push({
          author: i.author.login,
          date: i.commit.author.date,
          message: i.commit.message,
          commit: i.sha.slice(0,7),
          link: i.html_url,
          bio: i.author.html_url
        })
      });
    }
    )
  }
}
