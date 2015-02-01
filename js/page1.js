


/** Application page one component. */
var PageOneContent = React.createClass({
  displayName: 'PageOneContent',

 //  addScore: function() {
 //   score++;
 //   console.log(score);
 // },

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Question 1'),
      React.DOM.p(null, 'Which food item belongs in an earthquake emergency supplies package?'),
      React.DOM.p(null, 'Pick the best one.'),
      React.DOM.p(null, React.DOM.button(null, 'Meat Loaf')),
      React.DOM.p(null, React.DOM.button(null, 'Watermelon')),
      React.DOM.p(null, React.DOM.button(null, 'Raw Eggs')),
      React.DOM.p({onClick: addScore}, React.DOM.button(null, 'Nuts and Trail Mixes')),
      React.DOM.h3(null, ''),
      JQueryMobileButton({href:'#two'}, 'Next Question')
    );
  }
});