import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BlogPostService } from "../service/blog-post.service";
import { BlogPost } from "../models/blog-post";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  posts: BlogPost[];
  longText: string;
  constructor(private postService: BlogPostService, private router: Router) {}

  ngOnInit() {
    this.getPosts();
    this.loading = false;
    this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
  }

  private getPosts(): void {
    this.postService.GetPosts().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }
}
