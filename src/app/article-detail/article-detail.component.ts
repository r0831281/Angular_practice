import { Component, OnInit } from '@angular/core';
import { Article } from 'src/article';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: Article = { id: 0, title: "", subtitle: "", imageUrl: "", imageCaption: "", content: "", author: "", publishDate: "" };

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId != null) {
      let articleTemp = this.articleService.getArticleById(+articleId) ?? null;
      if(articleTemp != null) {
        this.article = articleTemp;
      }
    }
  }
}
