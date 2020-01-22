import {Component, OnInit} from '@angular/core';
import {DataTestService} from '../../services/data-test.service';
import {AdService} from '../../services/ad.service';
import {AdItem} from '../../components/ad-item';

@Component({
  selector: 'app-action-editor',
  templateUrl: './action-editor.component.html',
  styleUrls: ['./action-editor.component.css']
})
export class ActionEditorComponent implements OnInit {

  ads: AdItem[];
  selected: any[] = [];

  constructor(private dataTestService: DataTestService,
              private adService: AdService) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();

    this.dataTestService.getData('accordion.json').subscribe(data => {
      console.log(data);
    });

  }

  addNew(): void {
    console.log('click');
  }
}
