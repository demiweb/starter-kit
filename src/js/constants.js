export const {
  $DOC,
  $WIN,
  $HTMLBODY,
  $HTML,
  $BODY,

  ACTIVE,
  OPEN,
  SHOW,
  FOCUS,
  ANIMATE,
  HIDDEN,
  NOSCROLL,
  NOTOUCH,
  ERROR,
  HASTEXT,
  VALID,
  FIXED
} = {
  $DOC: $(document),
  $WIN: $(window),
  $HTMLBODY: $('html, body'),
  $HTML: $('html'),
  $BODY: $('body'),

  ACTIVE: 'is-active',
  OPEN: 'is-open',
  SHOW: 'is-show',
  FOCUS: 'has-focus',
  ANIMATE: 'is-animate',
  HIDDEN: 'is-hidden',
  NOSCROLL: 'no-scroll',
  NOTOUCH: 'no-touch',
  ERROR: 'has-error',
  HASTEXT: 'has-text',
  VALID: 'is-valid',
  FIXED: 'is-fixed'
};
