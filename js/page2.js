

/** Application page one component. */
var PageTwoContent = React.createClass({
  displayName: 'PageOneContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Question 2'),
      React.DOM.p(null, 'How should you behave during an earthquake?'),
      React.DOM.p(null, 'Pick the best one.'),
<<<<<<< HEAD
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Panic and run around screaming')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Spread the news on social Facebook')),
      
       /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right'}, null, 'Keep calm')),
     
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Dance')),
=======
      React.DOM.p(null, React.DOM.button(null, 'Panic and run around screaming')),
      React.DOM.p(null, React.DOM.button(null, 'Spread the news on social Facebook')),
      
       /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button(null, 'Keep calm')),
     
      React.DOM.p(null, React.DOM.button(null, 'Dance')),
>>>>>>> FETCH_HEAD
      React.DOM.h3(null, ''),
      JQueryMobileButton({href:'#three'}, 'Next Question'),
      JQueryMobileButton({href:'#one'}, 'Last Question')
    );
  }
});