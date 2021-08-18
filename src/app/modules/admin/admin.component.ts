import { Component, OnInit } from '@angular/core';
import { LazyDialogService } from 'src/app/core/services/lazy-dialog.service';
import { LazySnackBarService } from 'src/app/core/services/lazy-snack-bar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public lazyDialogService: LazyDialogService,
    public lazySnackBarService: LazySnackBarService,
  ) {
  }

  ngOnInit(): void {
  }

  async openDialog(): Promise<void> {
    const dialogRef = this.lazyDialogService.open('confirmation', {
      width: '720px',
      height: 'auto',
      maxWidth: 'calc(100vw - 32px)',
      autoFocus: false,
      data: 'ok'
    });
    (await dialogRef).afterClosed().subscribe(() => {
      console.log('Dialog closed successfully');
    });
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
