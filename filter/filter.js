console.log('filter');

var filter = React.createClass({

    displayName: 'filter',

    getInitialState: function () {
      return { a: 1 };
    },
    
    example: function() { 
        console.log('!!! выведено в функции example'); 
        // this.setState( {a: 9} ); // not a function
      } (),

      render: function() {
        var itemsCode = [];

        console.log(this.state.a + ' выведено в рендере'); // выводит 1

        // this.setState( {a: 8} ); рекурсия
        // console.log(this.state.a); выведет 1

        for (var i = 0; i < this.props.items.length; i++ ) {
            var singleItem = this.props.items[i];
            var singleItemCode =        
                React.DOM.div({key:singleItem.code,className:'singleItem'},
                React.DOM.span({className:'column'}, singleItem.itemName),
                React.DOM.span({className:'column'}, singleItem.itemPrice),
                React.DOM.span({className:'column'},
                    React.DOM.img({src: singleItem.itemPhoto})),
                React.DOM.span({className:'column'}, singleItem.count),
                );

            itemsCode.push(singleItemCode);
        };

        var headers = [] 
        for (var i = 0; i < tableHeader.length; i++) {
            var singleHeader = React.DOM.span({className:'column'}, tableHeader[i].headerItem);
            headers.push(singleHeader);
            // this.setState( {a: 8} ); рекурсия
            // console.log(this.state.a) выведет 1
        }
        // this.setState( {a: 8} ) рекурсия


        return React.DOM.div({className:'ishop'}, 
            React.DOM.div({className:'shopNameHeader'}, this.props.shopName),
            React.DOM.div({className:'singleItem singleHeader'}, headers),
            React.DOM.div({className:'items'}, itemsCode),
            // this.setState( {a: 8} ) рекурсия
        );
    },
  
  })