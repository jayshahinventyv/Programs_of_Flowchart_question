import { Component } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopUpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public mypop:boolean = false;
  newTask(){
    this.mypop=true;
    console.log(this.mypop);
  }
  
}
