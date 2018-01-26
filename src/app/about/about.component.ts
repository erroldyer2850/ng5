import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(res => console.log(res.id)
    );
  }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['']);
  }

}
