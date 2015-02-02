/** Application page one component. */
var PageThreeContent = React.createClass({
  displayName: 'PageThreeContent',


  render: function() {
   return React.DOM.div({id:'header-div'},null,

       React.DOM.div({id:'progress'}, null,
      React.DOM.h1(null, 'o o O o o')
      ),
      
      React.DOM.div({id:'body'},null,
        
      
      React.DOM.p(null, 'Where is a good place to get to during an earthquake?'),
      React.DOM.p(null, 'Pick the best one.'),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Near a window')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'On a roof')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'In your bed')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right'}, null,'Under a table')),
      
      React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ',href:'#four'}, 'Next Question')
        ),
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'lastQ',href:'#two'}, 'Previous Question')

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