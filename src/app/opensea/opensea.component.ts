import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as OpenSeadragon from 'openseadragon';

@Component({
  selector: 'app-opensea',
  templateUrl: './opensea.component.html',
  styleUrls: ['./opensea.component.scss'],
})
export class OpenseaComponent implements OnInit {
  @ViewChild('seadragonViewer', { static: true }) private viewer!: ElementRef;
  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    const viewer = this.ngZone.runOutsideAngular(() =>
      OpenSeadragon({
        element: this.viewer.nativeElement,
        prefixUrl: "/assets/images/",
        tileSources: {
          type: 'image',
          url: '/assets/images/54.jpg',
        },
      })
    );
  }
}
