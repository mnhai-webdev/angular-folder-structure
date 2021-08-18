import { Component, OnInit } from '@angular/core';
import { LazyDialogService } from 'src/app/core/services/lazy-dialog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public lazyDialogService: LazyDialogService) {
  }

  ngOnInit(): void {
  }

  async openDialog(): Promise<void> {
    const dialogRef = this.lazyDialogService.openDialog('confirmation', {
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
