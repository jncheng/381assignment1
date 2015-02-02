/** Application page five component. */
var PageFiveContent = React.createClass({
  displayName: 'PageFiveContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Question 5'),
      React.DOM.p(null, 'What phone number should you call if there is an earthquake?'),
      React.DOM.p(null, 'Pick the best one.'),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Emergency Fire 9-1-1')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Emergency Police 9-1-1')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Emergency Hospictal 9-1-1')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Weather Network 604-433-5590')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right'}, null,'Stormline 1-800-463-9463')),
      JQueryMobileButton({href:'#results', 'data-rel':'dialog', 'data-transition':'pop'}, 'Finish'),
      JQueryMobileButton({href:'#three'}, 'Last Question')
    );
  }
});