import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                     //index.html de bağırma biçimidir.
  templateUrl: './app.component.html',      //görüntülenecek bağlandığı bileşeni ifade eder.
  styleUrls: ['./app.component.css']        //bağlı css paketleri liste içerisine yazılır.
})
export class AppComponent {                 //export=erişime izin verir.  Class bir sınıf olduğunu ifade eder. AppComponent iberesi ise bizsim ana class'ımızdır.
  title = 'beginningProject';
}
