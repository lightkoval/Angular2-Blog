import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {UserListComponent} from "./user-list/user-list.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {CreatePostComponent} from "./create-post/create-post.component";
import {PostsComponent} from "./posts/posts.component";
import {ProfileComponent} from "./profile/profile.component";
import {BlogComponent} from "./blog/blog.component";
import {CreateCommentComponent} from "./create-comment/create-comment.component";
import {CommentsComponent} from "./comments/comments.component";


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', component: UserListComponent },
  { path: 'create-user', component: CreateUserComponent},
  { path: 'users/:id', component: EditUserComponent},
  { path: 'create-post', component: CreatePostComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'blog/:id', component: BlogComponent},
  { path: 'comment', component: CreateCommentComponent},
  { path: 'comments', component: CommentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
