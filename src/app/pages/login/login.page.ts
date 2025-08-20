import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/servicess/auth.service';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { FlagService } from 'src/app/flag.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {
	formulario: FormGroup;
	constructor(private formBuilder: FormBuilder, private router: Router,
		private authService: AuthService,
		private flagService: FlagService) {
		this.formulario = this.formBuilder.group({
			correo: [
				'',
				[Validators.required, Validators.email] // Validación de correo electrónico
			],
			password: [
				'',
				[
					Validators.required,
					Validators.minLength(8),
					this.containsLetter(),
					this.containsNumber(),
					this.containsSpecialCharacter(),
				],
			],

		});

	}
	logIn(email: string, password: string) {
		this.authService.logInWithEmailAndPassword(email, password);
		this.authService.setLoggedInUserEmail(email);
		this.flagService.setFlag(true);
	}


	ngOnInit() { }
	containsLetter() {
		return (control: AbstractControl) => {
			if (!/[A-Za-z]/.test(control.value)) {
				return { noLetter: true };

			}
			return null;

		};

	}

	containsNumber() {
		return (control: AbstractControl) => {
			if (!/\d/.test(control.value)) {
				return { noNumber: true };

			}
			return null;

		};

	}

	containsSpecialCharacter() {
		return (control: AbstractControl) => {
			if (!/[@$!%*#?&.-_]/.test(control.value)) {
				return { noSpecialCharacter: true };

			}
			return null;

		};

	}

	olvidocontra() {
		this.router.navigate(['/olvido-contra']);

	}

	registro() {
		this.router.navigate(['/registro']);

	}
	home() {
		this.router.navigate(['/home']);

	}
	submitForm() {


	}

	cambiarFlag(): void {
		this.flagService.setFlag(true);
	}

}

