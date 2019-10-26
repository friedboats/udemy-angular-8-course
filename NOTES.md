# Angular Notes

## Angular
- Angular itself is split into modules.
  - **Commands**
    - ng g c component-name
      - This will create the folder containing the component's scss, html, ts and spec files within the main app folder.
      - It will update the app.module.ts file, adding the import and declaration for the component to be registered.
      - Same as ng generate component component-name

## main.ts
- Is the first file that gets executed.
- Passes AppModule to bootstrapModule starting the angular application.

## app.module.ts
- You pass AppComponent into the bootstrap array to tell Angular what to reference when it starts itself. Angular will analyze the app component and reads the files for setup and knows the selector app-root which is what index.html has on it as the main tag of the app.

## Components
- Is a TypeScript class, so Angular is able to instantiate it. To create Objects based on the blueprint we set up within the component file.
- We tell angular that this is not a normal .ts class, but a component by using a decorator
- Each Component must have a template property, either **templateURL** or **template**. This is the one property that you have to have at all times.

## Decorators
- This is TypeScript feature that allow you to enhance your elemnts that you use in your code (not restricted to classes).
- Decorators are always defined with an @ symbol in front of them.
  - Example: @Component()
- TypeScript knows nothing about @Component() until you import it.
  - Example: import {Component} from '@angular/core';
- Pass a JavaScript Object to the decorator to configure it.
  - This acts as the class meta data for Angular to know what to do with this class.

- **Component Decorator**
    - **selector**
      - The HTML tag in which your abel to use later in your other component's templates. Must be unique.
      - Usually preceeded by 'app-' and then the name of the component.
    - **templateURL**
      - References an external HTML file.
    - **template**
      - You can add inline template code inside of this property.
      - This must be in one line when using quotes.
      - You can do multi-line with JavaScript template expressions, using back ticks.
       ```
      @Component({
        selector: 'app-server'
        templateUrl: './servers.component.html',
        //OR
        template: '<app-server></app-server><app-server></app-server>',
        //OR
        template: `
          <app-server></app-server>
          <app-server></app-server>`
        styleUrls: ['./servers.component.scss']
      })
      ```
    - **NOTES**
      - Each Component must have a template property, either **templateURL** or **template**. This is the one property that you have to have at all times.
      - Rule of thumb is that if you have 3 or more lines to create an HTML file.
- **NgModule Decorator (FYI this is used in app.module.ts)**
    - **declarations**
      - Angular will not scan all of your files. If you don't tell Angular that your component exists, it will not know it.
      - You have to register your component here.
      - Webpack will add the extension, which bundles our project automatically.
      - Once registered you can use these components in any other component with just registering them here.
    - **imports**
      - Allows us to add some other modules.
      - Angular is split into Modules.
      - **BrowserModule**
        - Gives us all of the base functionality we need to start our app.
      - **FormsModule**
      - **HttpModule**
    - **providers**
    - **bootstrap**
      - Responsible for telling Angular which component to be aware of when the application starts. 
      - Which file should you recognize in the index.html file.
      - We won't add any more component selectors to the index.hmtl file, only one.

## imports
- You do not add the extension to the TyprScript class name when importing the file.