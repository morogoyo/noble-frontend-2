import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import {AuthService} from '../../shared/services/authentication/auth-service.service';
import {Router} from '@angular/router';


@Component({
    templateUrl: './login-2.component.html'
})

export class Login2Component implements OnInit{
    // loginForm: FormGroup;

    public loginForm: FormGroup = this.fb.group({
        userName: [null, Validators.compose([Validators.required])],
        password: [null, Validators.compose([Validators.required])]
    });

    submitForm(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[ i ].markAsDirty();
            this.loginForm.controls[ i ].updateValueAndValidity();
        }
    }

    constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    }

    ngOnInit(): void {
        if (this.authService.getAuthenticatedToken().includes('Bearer')) {
            console.log('the init method fired and page has been re routhed to view page');
            this.router.navigate(['client', 'view']).then();

            this.loginForm = this.fb.group({
                userName: [null, [Validators.required]],
                password: [null, [Validators.required]]
            });

        }
    }


    onClickSubmitAuthorization() {
        // console.warn(this.loginForm.value);
        this.authService.login(this.loginForm.value)
            .subscribe(d => {
                    this.router.navigate(["client", "view"]).then();
                    console.log('User LoggedIn');

                },
                error => {
                    console.log(error)
                },
                () => {
                }
            );

    }

}
