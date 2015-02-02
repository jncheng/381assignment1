/** Application page five component. */
var PageFiveContent = React.createClass({
  displayName: 'PageFiveContent',

  updatePercentage: function(e) {
    document.getElementById("percentage").innerHTML = "You got " + scorePercentage() + "%, Good job. These are the answers that you got right and wrong.";
  },

  render: function() {
    return React.DOM.div({id:'header-div'},null,
      React.DOM.h1(null, 'O O O O O'),
      
      
      React.DOM.div({id:'body'},null,
        
        React.DOM.h2(null, 'Question 5'),
      React.DOM.p(null, 'What phone number should you call if there is an earthquake?'),
      React.DOM.p(null, 'Pick the best one.'),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Emergency Fire 9-1-1')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Emergency Police 9-1-1')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Weather Network 604-433-5590')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right'}, null,'Stormline 1-800-463-9463')),



      React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ', href:'#results', 'data-rel':'dialog', 'data-transition':'pop', onClick: this.updatePercentage}, 'Finish')

        ),
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'lastQ',href:'#four'}, 'Last Question')

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
   