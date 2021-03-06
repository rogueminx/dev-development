import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostNewComponent } from './post-new/post-new.component';
import { PostListComponent } from './post-list/post-list.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentNewComponent } from './comment-new/comment-new.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuardService } from './auth-guard.service'
import { AuthenticationService } from './authentication.service';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PostNewComponent,
    PostListComponent,
    PostDetailsComponent,
    CommentNewComponent,
    PostEditComponent,
    CommentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
