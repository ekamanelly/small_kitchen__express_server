# 🔩 small_kitchen

> ## 👀 Overview
>
> This is a simple demonstration of dependency invasion with uncle Bob techniques. His suggestion removed the hassles of code testing and scaling as dependency should be injected not imported, you can catch an injection example [_here_](routes/user.route). Injection makes it really easy to stub functions when writing test.

I have made:

- a [_helper_](/helper) folder where I have put all the utilities such as generateRandomString, and other general utilities.
- a [_models_](model) folder for all application models and Model were created with mongoose Schema.

- a [_validators_](validators) folder to most entity validators before they are sent to Database.
  a [_unit-test_](_test_/unit_test) folder for unit test. the test covers controllers Database.

> ## 🔧 Setup

- clone the repo
- add a .env and with a dbString
- run npm install to get npm package
- run npm run dev
