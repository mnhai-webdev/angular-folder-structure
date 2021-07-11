import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/data/schemas/article';
import { ArticleService } from 'src/app/data/services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article$!: Observable<Article>;
  constructor(private _route: ActivatedRoute, private _api: ArticleService) { }

  ngOnInit(): void {
    let slug: any = this._route.snapshot.paramMap.get('slug');
    this.article$ = this._api.getArticleBySlug(slug);
  }

}
