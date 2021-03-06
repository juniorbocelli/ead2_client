import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/model.post';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string = '';
  post: Post = {
    id: '',
    title: '',
    description: '',
    creator: '',
  };
  form!: FormGroup;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { };

   ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    }); 
      
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      creator: new FormControl('', Validators.required),
    });
  };

  get f() {
    return this.form.controls;
  };

  submit() {
    this.postService.update(this.id, this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('post/index');
    });
  };
};
