
import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MatSidenav } from '@angular/material';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {UserService} from '../../../../services/user.service';



@Component({
 selector: 'app-user-info',
 templateUrl: 'user-info.component.html',
 styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

 selectedFile = null;
  @ViewChild('cropImageDialog', {static: false}) cropImageDialog: TemplateRef<any>;
  dialogRef: MatDialogRef<any>;
  @Input() userInfo;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  isImageLoaded = false;
  isCropperReady = false;
  isImageUploaded = false;

  userImg = '//placehold.it/150';

 constructor(public dialog: MatDialog, private userService: UserService) { }

 ngOnInit() { }

  closeConfirmDialog(): void {
    this.dialogRef.close();
  }

  fileChangeEvent(event: any): void {
    this.selectedFile = <File>event.target.files[0];
    if (this.selectedFile.name.match(/.(jpg|jpeg|png)$/i)) {
      this.openImageCropDialog();
      this.imageChangedEvent = event;
    } else {
      // need to change
      alert('not image');
    }
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    this.isImageLoaded = true;
    // show cropper
  }
  cropperReady() {
    // cropper ready
    this.isCropperReady = true;
  }
  loadImageFailed() {
    // show message
  }

  uploadImage() {
    console.log(123,this.croppedImage);
    this.userImg = this.croppedImage;
    this.isImageUploaded = true;

    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log( 'this.selectedFile', this.selectedFile)
    this.userService.uploadPhoto(fd)
      .subscribe(result => console.log('result',result))

    this.closeConfirmDialog();
  }

  openImageCropDialog(): void {
    this.dialogRef = this.dialog.open(this.cropImageDialog, {
      width: '300px',
      position: { top: '225px' },
      disableClose: true
      // panelClass: 'background-white'
    });
  }



}
