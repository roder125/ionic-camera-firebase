import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  captureDataUrl: string;

  constructor(private camera: Camera, public navCtrl: NavController) {

  }

  capture(){

    let options = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      allowEdit: true,
      saveToPhotoAlbum: false,
      cameraDirection: 1,
      sourceType: this.camera.PictureSourceType.CAMERA
      };

    this.camera.getPicture(options)
      .then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }
  

}
