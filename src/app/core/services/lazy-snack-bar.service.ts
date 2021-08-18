import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LazySnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  async open(snackBarName: string, config?: MatSnackBarConfig): Promise<MatSnackBarRef<any>> {
    const chunk = await import(`src/app/shared/snack-bars/${snackBarName}/${snackBarName}.component`);
    const snackBarComponent = Object.values(chunk)[0] as ComponentType<unknown>;
    return this.snackBar.openFromComponent(snackBarComponent, config);
  }

}
