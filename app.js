import React from 'react'
import ReactDOM from 'react-dom'


class CommentBox extends React.Component {
    constructor(props) {
        super(props);
            var data = [{
        Id: 1,
        Author: "Mark Soifer",
        Text: "Hello ReactJS.NET World!"
    }, {
        Id: 2,
        Author: "Pete Hunt",
        Text: "This is one comment"
    }, {
        Id: 3,
        Author: "Jordan Walke",
        Text: "This is *another* comment"
    }];
        this.state = {
            data: data
        };

    }



    render() {
         var mainData = this.state.data.map(function (item) {
             return (
                 <div>
                     <div>{item.Id}</div>
                      <div>{item.Author}</div>
                       <div>{item.Text}</div>
                 </div>              
              );
         });

        return ( 
            <div> 
               {mainData}
         </div>
        );

    }
}

ReactDOM.render( <CommentBox/>,
    document.getElementById('content')
);

// ReactDOM.render(
//   <div>Hello, world!</div>,
//   document.getElementById('content')
// );