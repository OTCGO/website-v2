import {Component, EventEmitter, Input, Output} from '@angular/core'


@Component({
  selector: 'otcgo-header',
  styleUrls: ['./header.component.scss'],
  template: `
      <header class="otcgo-header__container mdl-layout__header" 
              [class.otcgo-header--scrolled]="isScroll">
        <!--<div class="otcgo-header__logo-wrapper">
          <img src="../../assets/img/angular-logo.png" alt="">
        </div>-->
        <!--<otcgo-login></otcgo-login>-->
        <div class="otcgo-header-navigation__container">
          <nav *ngIf="!isScroll" class="otcgo-header-navigation mdl-navigation">
            <div class="timer mdl-navigation__link mdl-navigation__link--icon">
              <i class="material-icons">timer</i>
              <span>07</span>
            </div>
            <div class="height mdl-navigation__link mdl-navigation__link--icon">
              <i class="material-icons">line_weight</i>
              <span>12091209</span>              
            </div>
            <div class="block-browser mdl-navigation__link">
              <span>区块浏览</span>
            </div>
            <div class="mdl-navigation__link">
              <span class="bar"></span>
            </div>
            <div class="import-wallet mdl-navigation__link">            
              <span>登陆钱包</span>
            </div>
            <div class="create-wallet mdl-navigation__link">            
              <span>创建钱包</span>
            </div>
            <div class="i18n mdl-navigation__link mdl-navigation__link--icon">
              <span>中文&lt;Chinese&gt;</span>
              <i class="material-icons">arrow_drop_down</i>
            </div>
          </nav>
          <div *ngIf="isScroll" class="otcgo-header__user-scrolled">
            <div class="i18n">
              <span>中文</span>
              <i class="material-icons">arrow_drop_down</i>              
            </div>
            <div class="user">
              <div class="avatar">
                <i class="material-icons">face</i>
              </div>
              <span class="text">
                点击登陆
              </span>
            </div>
          </div>
        </div>        
      </header>
  `
})
export class HeaderComponent {
  @Input() isScroll;
}