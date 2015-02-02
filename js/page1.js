
/** Application page one component. */
var PageOneContent = React.createClass({
  displayName: 'PageOneContent',

  handleClick1: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('wrong_1_1').style.color = "#ff0000";
      document.getElementById('right_1').style.color = "#00ff00";
    }
    
    pageOneAnswered = true;
  },

  handleClick2: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('wrong_1_2').style.color = "#ff0000";
      document.getElementById('right_1').style.color = "#00ff00";
    }

    pageOneAnswered = true;
  },

  handleClick3: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('wrong_1_3').style.color = "#ff0000";
      document.getElementById('right_1').style.color= "#00ff00";
    }

    pageOneAnswered = true;
  },

  handleClick4: function(id) {
    console.log(score);
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('right_1').style.color = "#00ff00";
      score++;
      console.log(score);
    }

    pageOneAnswered = true;
  },

  render: function() {
    return React.DOM.div({id:'header-div'},null,
      React.DOM.div({id:'progress'}, null,

        React.DOM.h1(null, 'O o o o o ')
      ),
      
      
      React.DOM.div({id:'body'},null,

        React.DOM.p(null, 'Which food item belongs in an earthquake emergency supplies package?'),
        React.DOM.p(null, 'Pick the best one.'),
        React.DOM.p(null, React.DOM.button({id: 'wrong_1_1', onClick: this.handleClick1},'Panic and run around screaming')),
        React.DOM.p(null, React.DOM.button({id: 'wrong_1_2', onClick: this.handleClick2},null, 'Spread the news on social Facebook')),
        
         /* right answer*/
        React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right_1', onClick: this.handleClick4},null, 'Keep calm')),
       
        React.DOM.p(null, React.DOM.button({id: 'wrong_1_3', onClick: this.handleClick3},null, 'Dance')),
        React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ',href:'#two'}, 'Next Question')
        ),
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'lastQ',href:'#home'}, 'Home')

        )
      //)
      // );
      // return  React.DOM.div({id: 'right-col'},
      //   JQueryMobileButton({href:'#one'}, 'Last Question')
     
      // );
      )
    );
  }


});