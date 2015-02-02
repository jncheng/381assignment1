

/** Application page one component. */
var PageTwoContent = React.createClass({
  displayName: 'PageOneContent',

  render: function() {
    return React.DOM.div({id:'header-div'},null,
      React.DOM.h1(null, 'O O O O O'),
      
      
      React.DOM.div({id:'body'},null,
        
        React.DOM.h2(null, 'Question 2'),
        React.DOM.p(null, 'How should you behave during an earthquake?'),
        React.DOM.p(null, 'Pick the best one.'),
        React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Panic and run around screaming')),
        React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Spread the news on social Facebook')),
        
         /* right answer*/
        React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right'}, null, 'Keep calm')),
       
        React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Dance')),
        React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'nextQ',href:'#three'}, 'Next Question')
        ),
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'lastQ',href:'#one'}, 'Last Question')

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