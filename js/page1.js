
/** Application page one component. */
var PageOneContent = React.createClass({
  displayName: 'PageOneContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Question 1'),
      React.DOM.p(null, 'Which food item belongs in an earthquake emergency supplies package?'),
      React.DOM.p(null, 'Pick the best one.'),
<<<<<<< HEAD
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Meat Loaf')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Watermelon')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Raw Eggs')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right'}, null, 'Nuts and Trail Mixes')),
=======
      React.DOM.p(null, React.DOM.button(null, 'Meat Loaf')),
      React.DOM.p(null, React.DOM.button(null, 'Watermelon')),
      React.DOM.p(null, React.DOM.button(null, 'Raw Eggs')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button(null, 'Nuts and Trail Mixes')),
>>>>>>> FETCH_HEAD
      
      React.DOM.h3(null, ''),
      JQueryMobileButton({href:'#two'}, 'Next Question')
    );
  }
});