import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  star: number[] = [1, 2, 3, 4, 5];


  public feedback: any;
  submitted = false;
  feedbacks: any;
  starRating = 0;
  currentRate = 3.14;
 
  getlist: any;
  list: any;
  constructor(private formbuilder: FormBuilder, private appService: AppService,public router:Router) {


  }
  ngOnInit(): void {
    this.feedback = this.formbuilder.group({
      feedbacks: [''],
      rating: ['']
    })
  }

  onSubmit(datas: any) {
    var params = {
      'feedback': datas.feedbacks,
      'rating': datas.rating

    }
    if (this.feedback.valid) {
      this.appService.postmethod('queries/response/feedback/13', params).subscribe(result => {
        console.log(123)
        
      })
      console.log(datas)

    } else {
      console.log(datas)
    }
  }
  
  Click(i: any) {
    this.router.navigate(['/feedback', i])
    console.log('clicked');

}
back() {
  this.router.navigate(['/getlist'])
}



}
