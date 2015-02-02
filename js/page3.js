/** Application page one component. */
var PageThreeContent = React.createClass({
  displayName: 'PageThreeContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Question 3'),
      React.DOM.p(null, 'Where is a good place to get to during an earthquake?'),
      React.DOM.p(null, 'Pick the best one.'),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Near a window')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'On a roof')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'In your bed')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right'}, null,'Under a table')),
      
      React.DOM.h3(null, ''),
      JQueryMobileButton({href:'#four'}, 'Next Question'),
      JQueryMobileButton({href:'#two'}, 'Previous Question')
    );
  }
});



