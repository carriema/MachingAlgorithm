# Applause

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Assignment
Write an application that will match testers based on a user search criteria. The search results should be ranked in order of experience. Experience is measured by the amount of bugs a tester filed for a given device. You can use any third party libraries, but be prepared to discuss why you decided to use it.  You may use any technology, but please have a browser based UI for the search and results.

### Search Criteria
Country: values should be collected from "tester.csv" and should also have an option for "ALL". User can select one or more countries. Multiple selections are treated as "OR".

Device: values should be collected from "devices.csv" and should also have an option for "ALL". User can select one or more devices. Multiple selections are treated as "OR". 

 
**Walk Through Example 1**

Search Criteria: Country="ALL" and Device="iPhone 4"

Matches: 2 testers (User1 and User2). 

User1 filed 4 bugs for iPhone 4.

* 4 bugs filed for devices in search

User2 filed 10 bugs for iPhone 4. 

* 10 bugs filed for devices in search

Results: User2, User1

**Walk Through Example 2**

Search Criteria: Country="ALL" and Device="iPhone 4" or "iPhone 5"

Matches: 2 testers (User1 and User2). 

User1 filed 4 bugs for iPhone 4 and 20 bugs for iPhone 5.  
  
* 24 bugs filed for devices in search

User2 filed 10 bugs for iPhone 4.

* 10 bugs filed for devices in search

Results: User1, User2

**Walk Through Example 3**

Search Criteria: Country="ALL" and Device="iPhone 6" 

Matches: 2 testers (User3 and User4). 

User3 filed 4 bugs for iPhone 6  

* 4 bugs filed for devices in search

User4 filed 0 bugs

* 0 bugs filed for devices in search

Results: User3, User4

### Demo
[Demo on Heroku](https://young-oasis-16527.herokuapp.com/)

