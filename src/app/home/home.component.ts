import { Component, OnInit } from '@angular/core';
//import article service
import { ArticleService } from '../article.service';
import { Article } from 'src/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //create articles array
  articles: Article[] = [];

//inject article service
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    //get articles from article service
    this.articles = this.articleService.getArticles();
  }

}
