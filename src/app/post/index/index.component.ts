import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from '../model/model.post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    })
  };

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id: string) {
    this.postService.delete(id).subscribe((res: any) => {
      this.posts = this.posts.filter(item => item.id !== id);
      console.log('Post deleted successfully!');
    })
  }

}
