import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UserService} from '../../../../services/user.service';

@Component({
 selector: 'app-user-info',
 templateUrl: 'user-info.component.html',
 styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

 selectedFile = null;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  isImageLoaded = false;
  isCropperReady = false;
  isImageUploaded = false;

 constructor(private userService: UserService) { }

 userInfo = {
   email: "phytsyk@gmail.com",
   name: 'Andrii',
   lastname: "Fytsyk",
   country:" Ukraine",
   city: "Lviv",
   age: 24,
   description: "Frontend developer",
   image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjHxO-Yu4XlAhX_AxAIHQrnA6sQjRx6BAgBEAQ&url=https%3A%2F%2Fbipbap.ru%2Fkrasivye-kartinki%2Fkrasivye-kartinki-horoshego-kachestva-37-foto.html&psig=AOvVaw1umZrtOp77pAnQ3uLIOX58&ust=1570376690662507"
 };

 ngOnInit() { }

  fileChangeEvent(event: any): void {
    this.selectedFile = <File>event.target.files[0];
    if (this.selectedFile.name.match(/.(jpg|jpeg|png)$/i)) {
      this.isImageLoaded = true;
      this.selectedFile = <File>event.target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(this.selectedFile);
      reader.onload = (_event) => {
        this.userInfo['image'] = reader.result;
      };
    } else {
      // need to change
      alert('not image');
    }
  }

  uploadImage() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.userService.uploadPhoto(fd)
      .subscribe(result => {
        this.isImageLoaded = false;
      });
  }


}
