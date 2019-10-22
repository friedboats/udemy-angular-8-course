# Angular Notes

## main.ts
- Is the first file that gets executed.
- Passes AppModule to bootstrapModule starting the angular application.

## app.module.ts
- You pass AppComponent into the bootstrap array to tell Angular what to reference when it starts itself. Angular will analyze the app component and reads the files for setup and knows the selector app-root which is what index.html has on it as the main tag of the app.
