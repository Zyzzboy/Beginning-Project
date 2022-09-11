import { Component } from '@angular/core';

@Component({                                //class'ın component olduğunu ifade eden bir anatasyondur.
  selector: 'app-root',                     //index.html de bağırma biçimidir.  ./ aynı klasör demektir.
  templateUrl: './app.component.html',      //görüntülenecek bağlandığı bileşeni ifade eder.
  styleUrls: ['./app.component.css']        //bağlı css paketleri liste içerisine yazılır.
})
export class AppComponent {                 //export=public'tir,erişime izin verir.  Class bir sınıf olduğunu ifade eder. AppComponent iberesi ise bizsim ana class'ımızdır.
  
  myName = 'Can';                           //bu değişkenleri html kodunda {{myName}} şeklinde kullanılır.
}