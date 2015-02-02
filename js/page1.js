
/** Application page one component. */
var PageOneContent = React.createClass({
  displayName: 'PageOneContent',

  handleClick1: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('wrong_1_1').style.background = "#ff0000";
      document.getElementById('right_1').style.background = "#00ff00";
    }
    
    pageOneAnswered = true;
  },

  handleClick2: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('wrong_1_2').style.background = "#ff0000";
      document.getElementById('right_1').style.background = "#00ff00";
    }

    pageOneAnswered = true;
  },

  handleClick3: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('wrong_1_3').style.background = "#ff0000";
      document.getElementById('right_1').style.background = "#00ff00";
    }

    pageOneAnswered = true;
  },

  handleClick4: function(id) {
    console.log(score);
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('right_1').style.background = "#00ff00";
      score++;
      console.log(score);
    }

    pageOneAnswered = true;
  },

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Question 1'),
      React.DOM.p(null, 'Which food item belongs in an earthquake emergency supplies package?'),
      React.DOM.p(null, 'Pick the best one.'),
      React.DOM.p(null, React.DOM.button({id: 'wrong_1_1', onClick: this.handleClick1}, 'Meat Loaf')),
      React.DOM.p(null, React.DOM.button({id: 'wrong_1_2', onClick: this.handleClick2},null, 'Watermelon')),
      React.DOM.p(null, React.DOM.button({id: 'wrong_1_3', onClick: this.handleClick3},null, 'Raw Eggs')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right_1', onClick: this.handleClick4}, null, 'Nuts and Trail Mixes')),
      
      React.DOM.h3(null, ''),
      JQueryMobileButton({href:'#two'}, 'Next Question')
    );
  }

  

});