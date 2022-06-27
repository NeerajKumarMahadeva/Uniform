$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/uniform.feature");
formatter.feature({
  "name": "uniform login page",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@neeraj"
    }
  ]
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "uniformclass.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter invalid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "uniformclass.user_enter_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "uniformclass.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "uniformclass.validation_message_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@neeraj"
    }
  ]
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "uniformclass.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "uniformclass.user_enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "uniformclass.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "uniformclass.user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
});