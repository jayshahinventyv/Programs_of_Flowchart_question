import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
    @Input() pop:boolean=false;
    // v:any="";
    list:any[]=[];
    saveChange(desc:string){  
      this.list.push({id:this.list.length,name:desc});
      
      // localStorage.setItem('list',desc);
      // this.v=localStorage.getItem('list');
      console.log(this.list);
      // this.pop=false;
      console.log(this.pop);
      
      // this.close();
    }
    
    @Output() public childEvent=new EventEmitter();
    close(){
      const x:any=document.getElementById("close");
      x.style.display="none";
      this.childEvent.emit(false);
      // this.v=localStorage.getItem('list');
    }
    
    deleteItem(item:string){
        this.list=this.list.filter(i=> i.id!==item)
        console.log(this.list);
        
    }

    updateItem(item:string){
      this.list=this.list.filter(i=> i.id!==item);
    }
}
