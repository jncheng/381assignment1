/** Application page four component. */
var PageFourContent = React.createClass({
  displayName: 'PageFourContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Question 4'),
      React.DOM.p(null, 'How should you pack your extra batteries?'),
      React.DOM.p(null, 'Pick the best one.'),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Wrapped together in Tin foil')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Wrapped together in a plastic bag')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Individually wrapped in Tin Foil')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right'}, null,'Individually wrapped in plastic bags')),
      JQueryMobileButton({href:'#five'}, 'Next Question'),
      JQueryMobileButton({href:'#three'}, 'Last Question')
    );
  }
});