import {Page, Locator} from '@playwright/test';

// recebe page no constructor

// encapsula seletores

// metodos de interação com a página (ex: preencher campos, clicar em botões, etc...)

// metodos retornam apenas locators para que o teste possa fazer asserções

export class LoginPage {
    // locators
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly statusMessage: Locator;
    readonly credentialsBox: Locator;

    constructor(private page: Page){
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#loginBtn');
        this.errorMessage = page.locator('#errorMessage');
        this.statusMessage = page.locator('#statusMessage');
        this.credentialsBox = page.locator('#credentials-info');
    }

    // navega ae a página de login
    async goto(){
        await this.page.goto('https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login');
    }

    // logar
    async login(username: string, password: string){
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async fillEmail(email: string){
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string){
        await this.passwordInput.fill(password);
    }

    async clickSubmit(){
        await this.loginButton.click();
    }

    


}
