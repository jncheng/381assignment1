
/** Application page one component. */
var PageOneContent = React.createClass({

  //displayName: data[currentPage].displayName,



  handleClick1: function(id) {
    
    //currentPage = 1;

    if (!pageVisitedBool[currentPage]) {

      console.log( currentPage.toString() );

      document.getElementById('wrong_' + currentPage.toString() + '_1').style.color = "#ff0000";
      document.getElementById('right_' + currentPage.toString() ).style.color = "#00B233";
      document.getElementById('nextQ_' + currentPage.toString() ).style.background = "#33CCFF";
      
      currentPage++;
      console.log( 'currentPage: ' + currentPage.toString() );
    }
    
    pageVisitedBool[currentPage-1] = true;
  },

  handleClick2: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageVisitedBool[currentPage]) {
      document.getElementById('wrong_' + currentPage.toString() + '_2').style.color = "#ff0000";
      document.getElementById('right_1').style.color = "#00B233";
      document.getElementById('nextQ_1').style.background = "#33CCFF";

      currentPage++;
      console.log( currentPage.toString() );
    }

    pageVisitedBool[currentPage-1] = true;
  },

  handleClick3: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageVisitedBool[currentPage]) {
      document.getElementById('wrong_' + currentPage.toString() + '_3').style.color = "#ff0000";
      document.getElementById('right_1').style.color= "#00B233";
      document.getElementById('nextQ_1').style.background = "#33CCFF";

      currentPage++;
      console.log( currentPage.toString() );
    }

    pageVisitedBool[currentPage-1] = true;
  },

  handleClick4: function(id) {
    console.log(score);
    currentPage = 1;

    if (!pageVisitedBool[currentPage]) {
      document.getElementById('right_1').style.color = "#00B233";
      document.getElementById('nextQ_1').style.background = "#33CCFF";
      score++;
      console.log(score);

      currentPage++;
      console.log( currentPage.toString() );
    }

    pageVisitedBool[currentPage-1] = true;
  },

  // nextPage: function(id) {
  //   console.log(currentPage);
  //   currentPage ++;
  // },


  render: function() {

    generatedPage++;
    console.log(generatedPage);

    return React.DOM.div({id:'header-div'},null,
      React.DOM.div({id:'progress'}, null,

        //React.DOM.h1(null, 'O o o o o ')
        React.DOM.h1(null, 
          

            React.DOM.img({className: 'progressImg', src: circleImg_active.src}),
            React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
            React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
            React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
            React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}) 
        )
      ),
      
      
      React.DOM.div({id:'body'},null,

        React.DOM.p(null, data[generatedPage].question),

        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_' + generatedPage.toString() + '_1', onClick: this.handleClick1}, data[generatedPage].answer1)),
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_' + generatedPage.toString() + '_2', onClick: this.handleClick2},null, data[generatedPage].answer2)),
        
         /* right answer*/
        React.DOM.p({onClick: addScore}, React.DOM.button({className: 'answers',id: 'right_' + generatedPage.toString(), onClick: this.handleClick4},null, data[generatedPage].answer3)),
       
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_' + generatedPage.toString() + '_3', onClick: this.handleClick3},null, data[generatedPage].answer4)),

        React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ_' + generatedPage.toString(),href: pageHash[generatedPage + 1], onClick: this.handleNext}, '>')
        ),
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'homeQ',href: pageHash[generatedPage - 1], onClick: this.handlePrev}, '<')
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