run: npx wdio run ./wdio.conf.js

allure generate allure-results --clean -o allure-report

allure serve allure-results
