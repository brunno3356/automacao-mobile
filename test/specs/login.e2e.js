import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screen/menu.screen.js'
import LoginScreen from '../screen/login.screen.js'

describe('Login - My Demo App', () => {

    beforeEach(async () => {
        await MenuScreen.accessLoginScreen()
        await LoginScreen.waitForScreen()
    })

    it('CT-01 | Deve exibir erro ao logar com credenciais inválidas', async () => {
        await LoginScreen.fillLoginForm('usuario_invalido', '12345')
        await expect($(LoginScreen.errorMessage))
            .toHaveText('Provided credentials do not match any user in this service.')
    })

    it('CT-02 | Deve logar com sucesso com credenciais válidas', async () => {
        await LoginScreen.fillLoginForm('bob@example.com', '10203040')
        const errorVisible = await $(LoginScreen.errorMessage).isDisplayed().catch(() => false)
        await expect(errorVisible).toBe(false)
    })

    it('CT-03 | Deve exibir erro ao tentar logar com campos vazios', async () => {
        await LoginScreen.fillLoginForm('', '')
        await expect($(LoginScreen.errorMessage)).toBeDisplayed()
    })

})
