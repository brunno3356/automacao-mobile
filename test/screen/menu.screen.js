class MenuScreen {
    constructor() {
        this.leftMenuButton = '~open menu'
        this.loginMenuItem = "//*[@text='Log In']"
        this.catalogMenuItem = "//*[@text='Catalog']"
    }

    async openMenu() {
        await $(this.leftMenuButton).click()
    }

    async accessLoginScreen() {
        await this.openMenu()
        await $(this.loginMenuItem).click()
    }

    async accessCatalog() {
        await this.openMenu()
        await $(this.catalogMenuItem).click()
    }
}

export default new MenuScreen()