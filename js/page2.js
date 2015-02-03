
/** Application page one component. */
var PageTwoContent = React.createClass({
  displayName: 'PageTwoContent',

  handleClick1: function(id) {
        console.log("hello");
        currentPage = 2;

        if (!pageTwoAnswered) {
          document.getElementById('wrong_2_1').style.color = "#ff0000";
          document.getElementById('right_2').style.color = "#00ff00";
        }
        
        pageTwoAnswered = true;
      },

      handleClick2: function(id) {
        console.log("hello");
        currentPage = 2;

        if (!pageTwoAnswered) {
          document.getElementById('wrong_2_2').style.color = "#ff0000";
          document.getElementById('right_2').style.color = "#00ff00";
        }

        pageTwoAnswered = true;
      },

      handleClick3: function(id) {
        console.log("hello");
        currentPage = 2;

        if (!pageTwoAnswered) {
          document.getElementById('wrong_2_3').style.color = "#ff0000";
          document.getElementById('right_2').style.color = "#00ff00";
        }

        pageTwoAnswered = true;
      },

      handleClick4: function(id) {
        console.log(score);
        currentPage = 2;

        if (!pageTwoAnswered) {
          document.getElementById('right_2').style.color = "#00ff00";
          score++;
          console.log(score);
        }

        pageTwoAnswered = true;
      },

  render: function() {
    return React.DOM.div({id:'header-div'},null,
       React.DOM.div({id:'progress'}, null,
      React.DOM.h1(null, 'o O o o o')
      ),
      
      
      React.DOM.div({id:'body'},null,
        
        
        React.DOM.p(null, 'How should you behave during an earthquake?'),
        React.DOM.p(null, 'Pick the best one.'),
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_2_1', onClick: this.handleClick1},null, 'Panic and run around screaming')),
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_2_2', onClick: this.handleClick2},null, 'Spread the news on social Facebook')),
        
         /* right answer*/
        React.DOM.p({onClick: addScore}, React.DOM.button({className: 'answers',id: 'right_2', onClick: this.handleClick4}, null, 'Keep calm')),
       
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_2_3', onClick: this.handleClick3},null, 'Dance')),
        React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ',href:'#three'}, '>')
        ),
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'lastQ',href:'#one'}, '<')

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