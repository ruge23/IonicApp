import { Animation } from 'ionic-angular/animations/animation';
import { isPresent } from 'ionic-angular/util/util';
import { PageTransition } from 'ionic-angular/transitions/page-transition';

const DURATION = 500;
const OPACITY = 'opacity';
const TRANSPARENT = 0;
const OPAQUE = 1;

export class FadeTransition extends PageTransition{
    init(){
        super.init();

        const plt = this.plt;
        const enteringView = this.enteringView;
        const opts = this.opts;

        this.duration(isPresent(opts.duration) ? opts.duration : DURATION);
    }

    if (enteringView) {
        const enteringPageEle: Element = enteringView.pageRef().nativeElement;
  
        const enteringContent = new Animation(this.plt, enteringView.pageRef());
        this.add(enteringContent);
  
        enteringContent
            .fromTo(OPACITY, TRANSPARENT, OPAQUE, true);
    }

    
}