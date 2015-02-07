
/** Application page one component. */
var PageTwoContent = React.createClass({
  displayName: 'PageTwoContent',

  handleClick1: function(id) {
        console.log("hello");
        currentPage = 2;

        if (!pageTwoAnswered) {
          document.getElementById('wrong_2_1').style.color = "#FF0000";
          document.getElementById('right_2').style.color = "#00B233";
          document.getElementById('nextQ_2').style.background = "#33CCFF";

        }
        
        pageTwoAnswered = true;
      },

      handleClick2: function(id) {
        console.log("hello");
        currentPage = 2;

        if (!pageTwoAnswered) {
          document.getElementById('wrong_2_2').style.color = "#ff0000";
          document.getElementById('right_2').style.color = "#00B233";
          document.getElementById('nextQ_2').style.background = "#33CCFF";
        }

        pageTwoAnswered = true;
      },

      handleClick3: function(id) {
        console.log("hello");
        currentPage = 2;

        if (!pageTwoAnswered) {
          document.getElementById('wrong_2_3').style.color = "#ff0000";
          document.getElementById('right_2').style.color = "#00B233";
          document.getElementById('nextQ_2').style.background = "#33CCFF";
        }

        pageTwoAnswered = true;
      },

      handleClick4: function(id) {
        console.log(score);
        currentPage = 2;

        if (!pageTwoAnswered) {
          document.getElementById('right_2').style.color = "#00B233";
          document.getElementById('nextQ_2').style.background = "#33CCFF";
          score++;
          console.log(score);
        }

        pageTwoAnswered = true;
      },



  render: function() {

    currentPage++;
    console.log(currentPage);

    return React.DOM.div({id:'header-div'},null,
       React.DOM.div({id:'progress'}, null,
      React.DOM.h1(null, 

          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_active.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src})


        )
      ),
      
      
      React.DOM.div({id:'body'},null,
        
        
        React.DOM.p(null, data[currentPage].question),
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_2_1', onClick: this.handleClick1},null, data[currentPage].answer1)),
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_2_2', onClick: this.handleClick2},null, data[currentPage].answer2)),
        
         /* right answer*/
        React.DOM.p({onClick: addScore}, React.DOM.button({className: 'answers',id: 'right_2', onClick: this.handleClick4}, null, data[currentPage].answer3)),
       
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_2_3', onClick: this.handleClick3},null, data[currentPage].answer4)),
        React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ_2',href:'#three'}, '>')
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