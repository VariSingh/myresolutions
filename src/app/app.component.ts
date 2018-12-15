import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public addResolution:any = {
    name:""
  };
  public edit = -1;
  resolutions:any = []; 

  onKeyUp(event:any){
    if(event.key=="Enter"){
      if(this.edit>-1){//edit
        this.updateItem(this.addResolution,this.edit);
      }else{//add new
        this.addItem(this.addResolution);
      }
      //this.addResolution.name = "";
    }
  }

  editResolution(item,i){
     this.addResolution = item;
     this.edit = i; 
  }

  addItem(item){
    this.resolutions.push(item);
    console.log(this.resolutions);
  }

  updateItem(res,i){
    this.addResolution;
  }

}
