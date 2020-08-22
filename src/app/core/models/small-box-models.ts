export class SmallBox {
  header: string;
  detail: string;
  icon: string;
  isFooter: boolean;
  footerText: string;
  footerLink: string;
  cssClass: string;

  constructor(
    header: string,
    detail: string = '',
    icon: string = '',
    isFooter: boolean = true,
    footerText: string = 'More info',
    footerLink: string = '#',
    cssClass: string = ''
  ) {
    this.header = header;
    this.detail = detail;
    this.icon = icon;
    this.isFooter = isFooter;
    this.footerText = footerText;
    this.footerLink = footerLink;
    this.cssClass = cssClass;
  }
}
