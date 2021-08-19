import { Component, OnInit } from '@angular/core';
import { LazyDialogService } from 'src/app/core/services/lazy-dialog.service';

@Component({
  selector: 'app-lazy-dialog',
  templateUrl: './lazy-dialog.component.html',
  styleUrls: ['./lazy-dialog.component.scss']
})
export class LazyDialogComponent implements OnInit {

  constructor(public lazyDialogService: LazyDialogService) { }

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

}
