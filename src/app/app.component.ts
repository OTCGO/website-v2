/**
 * Angular 2 decorators and services
 */
import {
  Component, Inject, Input,
  OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

import 'jquery'; // Import jQuery
import 'fullpage.js'; // Import fullpage.js
import { MnFullpageService, MnFullpageOptions } from 'ngx-fullpage';


/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <otcgo-header [isScroll]="isScroll"></otcgo-header>
    <div [mnFullpage]="options" [mnFullpageOnLeave]="onLeave.bind(this)">      
      
      <div class="section poster">        
        <div class="poster-caption">
          <div class="poster-caption__title">Intelligent Asset Management Platform :)</div>
          <br>
          <div class="poster-caption__subtitle">--Superconducting Trading: a revolution of centralized transaction model!</div>
        </div>
        <div class="down-show" (click)="fullpageService.moveSectionDown()">
          <i class="material-icons">expand_more</i>
        </div>
        <div class="otcgo-layout-feature__container"
             [class.otcgo-layout-feature--isScrollDown]="isScroll"
             [class.otcgo-layout-feature--isScrollUp]="!isScroll">
          <div class="otcgo-layout-feature">
            <div class="carefree-assets otcgo-layout-feature__item">
              <span class="title">
                资金无忧
              </span>
              <span class="subtitle">
                智能合约点对点交易
              </span>
            </div>
            <div class="fast-order otcgo-layout-feature__item">
              <span class="title">
                快捷撮合
              </span>
              <span class="subtitle">
                无确认信息撮合效率
              </span>
            </div>
            <div class="lower-fee otcgo-layout-feature__item">
              <span class="title">
                更低费率
              </span>
              <span class="subtitle">
                交易手续费全网最低
              </span>
            </div>
            <div class="auto-bonus otcgo-layout-feature__item">
              <span class="title">
                自动分红
              </span>
              <span class="subtitle">
                保障投资人分红收益
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="section navigation-section">
        <div class="otcgo-layout-navigation__container">
          <div class="otcgo-layout-navigation__duce-card">
            <div class="duce-card__content">
              <div class="title">交易市场</div>
              <div class="text">专区板块简介，在这里你能干些什么，里边都有些嘛子玩意，如果有什么注意事项都可以标出来嘛，最后祝用户旗开得胜。</div>
              <button class="otcgo-button otcgo-button--flat">进入</button>
            </div>
            <div class="duce-card__tips">
              这里可以用来备注或提示某些注意事项，例如防诈骗警示等，必要时还可以用来打广告
            </div>
          </div>

          <div class="otcgo-layout-navigation__gyorslapok">
            <div class="otcgo-layout-navigation__tab-container">
              <div class="otcgo-layout-navigation__tab">
                <img src="../assets/img/A2-community.png" alt="">
                <span class="text">
                  资产流转
                </span>
              </div>
              <div class="otcgo-layout-navigation__tab">
                <img src="../assets/img/A2-community.png" alt="">
                <span class="text">
                  资产流转
                </span>
              </div>
              <div class="otcgo-layout-navigation__tab">
                <img src="../assets/img/A2-community.png" alt="">
                <span class="text">
                  资产流转
                </span>
              </div>
              <div class="otcgo-layout-navigation__tab">
                <img src="../assets/img/A2-community.png" alt="">
                <span class="text">
                  资产流转
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="section fp-auto-height footer-section">
        <otcgo-footer></otcgo-footer>
      </div>
    </div>
      
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';
  public isScroll = false

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    keyboardScrolling: true,
    /*onLeave(index, nextIndex, direction) {
      console.log(index, nextIndex, direction)
      var leavingSection = jquery(this);
      console.log(this)
      console.log(leavingSection)
      // leavingSection
    }*/
  })

  constructor(
    public appState: AppState,
    public fullpageService: MnFullpageService
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.fullpageService);
  }

  public onLeave(i, n, d) {
    if (i === 1 && d === 'down')
      this.isScroll = true
    else if (i === 2 && d === 'up')
      this.isScroll = false
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
