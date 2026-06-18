<h1 align="center">📱 Appium Android Automation</h1>

<p align="center">
  <strong>Automação de testes mobile Android com Appium + WebdriverIO + Mocha</strong><br/>
  Aplicando o padrão <em>Screen Object</em> para testes organizados, legíveis e escaláveis.
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-22+-339933?logo=node.js&logoColor=white" />
  <img alt="WebdriverIO" src="https://img.shields.io/badge/WebdriverIO-9-EA5906?logo=webdriverio&logoColor=white" />
  <img alt="Appium" src="https://img.shields.io/badge/Appium-2-662D91?logo=appium&logoColor=white" />
  <img alt="Mocha" src="https://img.shields.io/badge/Mocha-BDD-8D6748?logo=mocha&logoColor=white" />
  <img alt="Android" src="https://img.shields.io/badge/Android-API%2015+-3DDC84?logo=android&logoColor=white" />
</p>

---

## 📋 Sobre o Projeto

Este projeto tem como objetivo demonstrar automação de testes para aplicativos Android nativos utilizando **Appium 2** e **WebdriverIO 9**, seguindo boas práticas de QA mobile como o padrão **Screen Object Model**.

O app testado é o **My Demo App** (React Native), uma aplicação de e-commerce mobile disponibilizada pela Sauce Labs para fins de estudo e prática de automação.

---

## 🏗️ Arquitetura do Projeto

```
appium-android-automation/
├── app/
│   └── Android-MyDemoAppRN.apk      # APK do app de teste (não versionado)
├── test/
│   ├── screen/                       # Screen Objects (Page Object para mobile)
│   │   ├── login.screen.js           # Elementos e ações da tela de Login
│   │   └── menu.screen.js            # Elementos e ações do Menu lateral
│   └── specs/                        # Casos de teste E2E
│       └── login.e2e.js              # Testes do fluxo de Login
├── wdio.conf.js                      # Configuração do WebdriverIO + Appium
├── package.json
└── .gitignore
```

### 🎯 Padrão Screen Object Model

O projeto utiliza o padrão **Screen Object** (equivalente mobile do Page Object), que centraliza os seletores e ações de cada tela em classes dedicadas. Isso:

- ✅ Evita duplicação de seletores nos testes
- ✅ Facilita manutenção quando a UI muda
- ✅ Torna os testes mais legíveis e expressivos

---

## 🛠️ Tecnologias e Dependências

| Ferramenta | Versão | Função |
|---|---|---|
| **Node.js** | 22+ | Runtime JavaScript |
| **WebdriverIO** | ^9.19.2 | Framework de automação |
| **Appium** | 2.x | Servidor de automação mobile |
| **appium-uiautomator2-driver** | ^5.0.3 | Driver Android |
| **Mocha** | Built-in | Framework de testes (BDD) |
| **@wdio/spec-reporter** | ^9.19.2 | Reporter de resultados no terminal |

---

## ⚙️ Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado e configurado:

- ✅ **Java JDK 11+** — [Download](https://adoptium.net/)
- ✅ **Android Studio** com SDK e emulador configurado — [Download](https://developer.android.com/studio)
- ✅ **Appium 2** instalado globalmente:
  ```bash
  npm install -g appium
  appium driver install uiautomator2
  ```
- ✅ **Node.js 22+** — [Download](https://nodejs.org/)
- ✅ Variáveis de ambiente `ANDROID_HOME` e `JAVA_HOME` configuradas

### Verificar ambiente

```bash
appium doctor --android
```

---

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/brunno3356/automacao-mobile.git
cd automacao-mobile
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o dispositivo

No arquivo `wdio.conf.js`, ajuste as capabilities conforme seu emulador ou dispositivo:

```js
capabilities: [{
  platformName: 'Android',
  'appium:platformVersion': '15',          // Versão do Android do seu emulador
  'appium:deviceName': 'Medium Phone API 36.1', // Nome do emulador (adb devices)
  'appium:app': '/caminho/absoluto/para/app.apk',
  'appium:automationName': 'UIAutomator2',
}]
```

> 💡 Use `adb devices` para verificar o nome exato do seu emulador ou dispositivo.

### 4. Execute os testes

```bash
npm run wdio
```

---

## 🧪 Cenários de Teste

### Login (`test/specs/login.e2e.js`)

| ID | Cenário | Resultado Esperado |
|---|---|---|
| CT-01 | Login com credenciais **inválidas** | Exibe mensagem de erro |
| CT-02 | Login com credenciais **válidas** | Login realizado com sucesso |
| CT-03 | Login com campos **vazios** | Exibe mensagem de erro |

---

## 📸 App Testado

**My Demo App** — React Native e-commerce demo pela Sauce Labs.

- APK disponível em: [Sauce Labs Sample App Releases](https://github.com/saucelabs/my-demo-app-rn/releases)
- Versão utilizada: `1.3.0 build-244`

---

## 📁 Estrutura dos Screen Objects

### `login.screen.js`

Centraliza os seletores da tela de login e o método para preencher o formulário com qualquer credencial:

```js
class LoginScreen {
    constructor() {
        this.userNameInput = '~Username input field'
        this.passwordInput = '~Password input field'
        this.loginButton   = '~Login button'
        this.errorMessage  = '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'
    }

    async fillLoginForm(username, password) {
        await $(this.userNameInput).setValue(username)
        await $(this.passwordInput).setValue(password)
        await $(this.loginButton).click()
    }
}
```

### `menu.screen.js`

Gerencia a navegação pelo menu lateral do app:

```js
class MenuScreen {
    async accessLoginScreen() {
        await $(this.leftMenuButton).click()
        await $(this.loginMenuItem).click()
    }
}
```

---

## 🔧 Configuração do WebdriverIO

O arquivo `wdio.conf.js` configura:

- **Runner:** Local (Appium sobe automaticamente via `@wdio/appium-service`)
- **Framework:** Mocha com interface BDD
- **Timeout:** 60s por teste / 10s para elementos
- **Reporter:** Spec (saída colorida no terminal)
- **Retries de conexão:** 3 tentativas com timeout de 120s

---

## 📌 Boas Práticas Aplicadas

- 🏗️ **Screen Object Model** — seletores centralizados por tela
- ♻️ **`beforeEach`** — preparação de estado antes de cada teste
- 🧩 **Seletores semânticos** — uso de `accessibility id` (`~`) quando possível
- 📝 **Nomenclatura descritiva** — IDs de cenário (CT-01, CT-02...) nos títulos

---

## 👤 Autor

**Brunno** — QA Engineer  
[![GitHub](https://img.shields.io/badge/GitHub-brunno3356-181717?logo=github)](https://github.com/brunno3356)

---

> 📚 Projeto desenvolvido para estudo e prática de automação de testes mobile com Appium.
