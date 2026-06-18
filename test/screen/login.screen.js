class LoginScreen {
    constructor() {
        this.userNameInput = '~Username input field'
        this.passwordInput = '~Password input field'
        this.loginButton = '~Login button'
        this.errorMessage =
            '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'
        this.pageTitle = '~Login'
    }

    async fillLoginForm(username, password) {
        await $(this.userNameInput).setValue(username)
        await $(this.passwordInput).setValue(password)
        await $(this.loginButton).click()
    }

    async waitForScreen() {
        await $(this.userNameInput).waitForDisplayed({ timeout: 10000 })
    }
}

export default new LoginScreen()
