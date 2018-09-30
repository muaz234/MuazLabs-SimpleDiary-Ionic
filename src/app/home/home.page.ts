import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router' ; 
import  * as firebase from 'firebase' ;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
infos = [];
ref = firebase.database().ref('infos/');

constructor(public router: Router, public alertController: AlertController, private route: ActivatedRoute) 
{
  this.ref.on('value', resp => {
    this.infos = [];
    this.infos = snapshotToArray(resp);

  });
}

edit(key)
{
  this.router.navigate(['/edit/'+key]);
}

// addDiary()
// {
//   this.router.navigate(['/add-info']);
// }

async delete(key)
{
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Are you sure want to delete this diary?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('cancel');
        }
      },
      {
        text: 'Okay',
        handler: () => {
          firebase.database().ref('infos/'+key).remove();
        }
      }
    ]
  });
  await alert.present();
}

}

export  const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => 
    {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });
    return returnArr;
}