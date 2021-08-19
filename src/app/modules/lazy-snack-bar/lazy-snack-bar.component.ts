import { Component, OnInit } from '@angular/core';
import { LazySnackBarService } from 'src/app/core/services/lazy-snack-bar.service';

@Component({
  selector: 'app-lazy-snack-bar',
  templateUrl: './lazy-snack-bar.component.html',
  styleUrls: ['./lazy-snack-bar.component.scss']
})
export class LazySnackBarComponent implements OnInit {

  constructor(public lazySnackBarService: LazySnackBarService) { }

  ngOnInit(): void {
  }

  async openSnackbar(): Promise<void> {
    const snackbarRef = this.lazySnackBarService.open('test', {
      data: 'ok',
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
    (await snackbarRef).afterDismissed().subscribe(() => {
      console.log('Snackbar closed successfully');
    });
  }

}
