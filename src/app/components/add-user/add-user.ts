import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user-service';
import { User } from '../../services/user-data-types';

@Component({
  imports: [ReactiveFormsModule, RouterModule],
  selector: 'app-add-user',
  styleUrl: './add-user.css',
  templateUrl: './add-user.html',
})
export class AddUser {
  readonly isSaving = signal(false);
  readonly errorMessage = signal('');

  readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    role: new FormControl<User['role']>('member', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    status: new FormControl<User['status']>('active', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    field: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) {}

  addUser(): void {
    if (this.form.invalid || this.isSaving()) {
      this.form.markAllAsTouched();
      return;
    }

    this.errorMessage.set('');
    this.isSaving.set(true);

    const user: User = {
      ...this.form.getRawValue(),
      createdAt: new Date().toISOString(),
    };

    this.userService.saveUsers(user).subscribe({
      next: () => {
        this.isSaving.set(false);
        void this.router.navigate(['/']);
      },
      error: () => {
        this.isSaving.set(false);
        this.errorMessage.set(
          'Unable to save the user. Check that JSON Server is running and try again.',
        );
      },
    });
  }
}
