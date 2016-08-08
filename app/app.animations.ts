function animateIn(element: JQuery, className: string, done: Function) {
  if (className !== 'selected') return;

  element.css({
    display: 'block',
    position: 'absolute',
    top: 500,
    left: 0
  }).animate({
    top: 0
  }, done);

  return function animateInEnd(wasCanceled) {
    if (wasCanceled) element.stop();
  };
}

function animateOut(element: JQuery, className: string, done: Function) {
  if (className !== 'selected') return;

  element.css({
    position: 'absolute',
    top: 0,
    left: 0
  }).animate({
    top: -500
  }, done);

  return function animateOutEnd(wasCanceled) {
    if (wasCanceled) element.stop();
  };
}

export function phoneAnimationFactory() {
  let animateCallbackObject: angular.animate.IAnimateCallbackObject = {
    addClass: animateIn,
    removeClass: animateOut,
  };

  return animateCallbackObject;
}
