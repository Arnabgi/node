import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ServService } from '../serv.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  public testForm:any = FormGroup;
  private imageSrc: string = '';
  constructor(
    private obj:ServService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm(){
    this.testForm = new FormGroup({
      uid: new FormControl('',[Validators.required]),
      qualification : new FormControl('',[Validators.required]),
      upload: new FormControl('',[Validators.required])
    });
  }

  public imageLoad(event:any) {
    let fileList: FileList = event.target.files;
    //console.log(fileList);
    
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.handleInputChange(file);
    } else {
      alert("No file selected");
    }
  }
  handleInputChange(file:any) {
    var file = file;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e:any) {
    let reader = e.target;
    this.imageSrc = reader.result;
    // this.testForm.patchValue({
    //   upload: img
    // });
    //console.log(this.imageSrc);
  }

  submitForm(){
    console.log(this.imageSrc);
    
   let param = this.testForm.value;
   
   let value ={
    uid: param.uid,
    qualification :param.qualification,
    upload: this.imageSrc.toString()
   }
   this.obj.add(value).subscribe(data =>{
    console.log(data);
    
   })
  }

}
