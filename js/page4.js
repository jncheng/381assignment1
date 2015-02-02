/** Application page four component. */
var PageFourContent = React.createClass({
  displayName: 'PageFourContent',

  render: function() {
    return React.DOM.div({id:'header-div'},null,
       React.DOM.div({id:'progress'}, null,
      React.DOM.h1(null, 'o o o O o')
      ),
      
      
      React.DOM.div({id:'body'},null,
        
      
      React.DOM.p(null, 'How should you pack your extra batteries?'),
      React.DOM.p(null, 'Pick the best one.'),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Wrapped together in Tin foil')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Wrapped together in a plastic bag')),
      React.DOM.p(null, React.DOM.button({id: 'wrong'},null, 'Individually wrapped in Tin Foil')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({id: 'right'}, null,'Individually wrapped in plastic bags')),
      React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ',href:'#five'}, 'Next Question')
        ),
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'lastQ',href:'#three'}, 'Previous Question')

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