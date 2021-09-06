import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param',
  templateUrl: './query-param.component.html',
  styleUrls: ['./query-param.component.scss']
})
export class QueryParamComponent implements OnInit {
  order: string | undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params) => {
        console.log(params); // { order: "popular" }

        this.order = params.order;
        console.log(this.order); // popular
      }
      );
  }

}
