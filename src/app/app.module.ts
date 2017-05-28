import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserListComponent} from './user-list/user-list.component';
import {UsersService} from "./users.service";
import {AppRoutingModule} from "./app-routing-module";
import {CreateUserComponent} from './create-user/create-user.component';
import {SocialNetworksComponent} from './social-networks/social-networks.component';
import {NavComponent} from './nav/nav.component';
import {HeaderComponent} from './header/header.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsComponent } from './posts/posts.component';
import {PostsService} from "./posts.service";
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import {CommentsService} from "./comments.service";
import { CommentsComponent } from './comments/comments.component';
import {CreateCommentsService} from "./create-comments.service";
import {FormatDateService} from "./format-date.service";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    CreateUserComponent,
    SocialNetworksComponent,
    NavComponent,
    HeaderComponent,
    EditUserComponent,
    CreatePostComponent,
    PostsComponent,
    PostComponent,
    ProfileComponent,
    BlogComponent,
    CreateCommentComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsersService, PostsService, CommentsService, CreateCommentsService, FormatDateService,],
  bootstrap: [AppComponent]
})
export class AppModule {
}
