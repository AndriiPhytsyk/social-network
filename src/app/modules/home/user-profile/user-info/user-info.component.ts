
import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UserService} from '../../../../services/user.service';



@Component({
 selector: 'app-user-info',
 templateUrl: 'user-info.component.html',
 styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

 selectedFile = null;
  // @ViewChild('cropImageDialog', {static: false}) cropImageDialog: TemplateRef<any>;
  // dialogRef: MatDialogRef<any>;
  @Input() userInfo;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  isImageLoaded = false;
  isCropperReady = false;
  isImageUploaded = false;


 constructor(private userService: UserService) { }

 ngOnInit() { }

  fileChangeEvent(event: any): void {
    this.selectedFile = <File>event.target.files[0];
    if (this.selectedFile.name.match(/.(jpg|jpeg|png)$/i)) {
      this.isImageLoaded = true;
      console.log(333,this.selectedFile);
      this.selectedFile = <File>event.target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(this.selectedFile);
      reader.onload = (_event) => {
        console.log('reader.result',reader.result);
        this.userInfo['image'] = reader.result;
      }
    } else {
      // need to change
      alert('not image');
    }
  }

  uploadImage() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log( 'this.selectedFile', this.selectedFile)
    this.userService.uploadPhoto(fd)
      .subscribe(result => {
        this.isImageLoaded = false;
      })
  }


}
