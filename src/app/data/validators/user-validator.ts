import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { User } from '../schemas/user';

// Kiểm tra biến truyền vào có phải là thể hiện của interface User hay không
function instanceOfUser(user: any): user is User {
  return !!user // truthy
    && typeof user !== 'string' // Not just string input in the autocomplete
    && 'name' in user; // Has some qualifying property of Character type
}

export class UserValidator {

  static required(control: AbstractControl): any | null {
    return UserValidator.validate('required')(control);
  }

  static validate(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => !instanceOfUser(control?.value) ? {matchRequired: true} : null;
  }

}
