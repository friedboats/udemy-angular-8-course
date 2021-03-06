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
      - The HTML tag in which your able to use later in your other component's templates that use this component. Must be unique.
      - Usually preceeded by 'app-' and then the name of the component.
    - **templateURL**
      - References an external HTML file.
    - **template**
      - You can add inline template code inside of this property.
      - This must be in one line when using quotes.
      - You can do a multi-line with JavaScript template multi-line expressions, using back ticks.
    - **styleUrls**
      - In an array b/c you can reference multiple styles here.
      - This trumps the _styles_ decorator, if you have both (not that you would want that, but it let's you put both in without errors)
    - **styles**
      - I an array for string styles.
      - Use back ticks for JavaScript multi-line expressions.  
    - **Example:**
       ```
      @Component({
        selector: 'app-server' // <app-server></app-server>
        //OR
        selector: '[app-server]' // <div app-server></div> can use the selector as an attribute
        //OR
        selector: '.app-server' // <div class="app-server"></div> can use the selector as a class. Selecting by id will not work.
        templateUrl: './servers.component.html',
        //OR
        template: '<app-server></app-server><app-server></app-server>',
        //OR
        template: `
          <app-server></app-server>
          <app-server></app-server>`
        styleUrls: ['./servers.component.scss']
        //OR
        styles: [`
          h3 {
            color: yellow;
          }
        `]
      })
      ```
    - **NOTES**
      - Each Component must have a template property, either **templateURL** or **template**. This is the one property that you have to have at all times.
      - Rule of thumb is that if you have 3 or more lines to create an HTML file / SCSS file.
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
    - **Example:**
      ```
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';

      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';
      import { ServerComponent } from './server/server.component';
      import { ServersComponent } from './servers/servers.component';

      @NgModule({
        declarations: [
          AppComponent,
          ServerComponent,
          ServersComponent
        ],
        imports: [
          BrowserModule,
          AppRoutingModule
        ],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
      ```

## imports
- You do not add the extension to the TyprScript class name when importing the file.

## Databinding
- Communication between your business logic (TypeScript) and the template (HTML).
  - **String Interpolation**
    - Outputs data from .ts file to the .html file. 
    - Any expression that can be resolved to a string in the end.
    - <div>{{ data }}</div>
  - **Property Binding**
    - Outputs data from .ts file to the .html file.
    - [property]="data"
    - Can bind to pretty much all of the HTML properties.
  - **Event Binding**
    - Reacts to user events from .html file to the .ts file.
    - (event)="expression()"
    - We can passin $event in the expression($event).
    - $event will capture all of the data emitted from that event.
  - **Two-Way-Binding**
    - Able to react to events AND output something at the same time.
    - [(ngModel)]="serverName"
      - It will trigger on the input event and update the value of serverName in our component automatically.
      - It will also update the value of the input element if we change serverName somewhere else.
      - The two way data binding isn't really binding to the input event, it's the way the ngModel directive works: It passes any changes in the value of the given object to the input element and vice versa.

## Directives
  - Are instructions in the DOM.
  - Type of Directives:
    - **Components** 
      - Are directives (instrucitons in the DOM)
      - They use a template.
    - **Built in Directives**
      - There are directives without a template.
      - ***ngIf (structural directive)**
        - * is required b/c ngIf is a *structural directive*, which means it changes the structure of our DOM. Either adds the element or it doesn't.
        - Elements are not hidden, they are just not there.
        - <p *ngIf="serverCreated; else noServer">If context.</p>
          <ng-template #noServer>
              <p>Else context.</p>
          </ng-template>
      - **ngStyle (attribute directive)**
        - We need to set up configs for this Directive using property binding.
        - [ngStyle]="{'background-color': getColor()}"
      - **ngClass (attribute directive)**
        - We need to set up configs for this Directive using property binding.
        - [ngClass]="{className: getBooleanConditional()}"
  - Typically, we add directives using the attribute selector style.
