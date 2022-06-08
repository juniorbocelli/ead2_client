import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PostService } from '../post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public postService: PostService,
    private router: Router
  ) { };

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      creator: new FormControl('', Validators.required)
    });
  };

  get f() {
    return this.form.controls;
  }

  submit() {
    this.postService.create(this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('post/index');
    });
  };
};
