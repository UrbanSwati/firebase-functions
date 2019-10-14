# Functions

### Start project
Use `firebase init`

Pick options of what type of Firebase product you want, click `space` on it then `enter`

### Tips
If you using firebase database don't forget to initalize the project 

```
import * as admin from "firebase-admin";
admin.initializeApp();
```

### Deploy locally 
If your project is in typescript build it to JavaScript using `npm run-script build`
You can also check linting using `npm run-script lint`

To deply use locally use `firebase serve --only functions`

### Deploy to Firebase Functions
To deploy to firebase use `firebase deploy`

It will give you a link to the functions deployed
