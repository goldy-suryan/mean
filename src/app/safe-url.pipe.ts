import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private saniter: DomSanitizer){}
  transform(value: any, args?: any): any {
    return this.saniter.bypassSecurityTrustResourceUrl(value);
  }

}
