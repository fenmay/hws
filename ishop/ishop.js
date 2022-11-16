var ishop = React.createClass({

    displayName: 'ishop',

    propTypes: {
        itemName: React.PropTypes.string,
        itemPrice: React.PropTypes.string,
        count: React.PropTypes.string,
        itemPhoto: React.PropTypes.string,
    },
  
    render: function() {
        var itemsCode=[];

        for (var i = 0; i < this.props.items.length; i++ ) {
            var singleItem=this.props.items[i];
            var singleItemCode =        
                React.DOM.div({key:singleItem.code,className:'singleItem'},
                React.DOM.span({className:'column'},singleItem.itemName),
                React.DOM.span({className:'column'},singleItem.itemPrice),
                React.DOM.span({className:'column'},
                    React.DOM.img({src: singleItem.itemPhoto})),
                React.DOM.span({className:'column'},singleItem.count),
                );

            itemsCode.push(singleItemCode);
        };

        var headers = [] 
        for (var i = 0; i < tableHeader.length; i++) {
            var singleHeader = React.DOM.span({className:'column'},tableHeader[i]);
            headers.push(singleHeader);
        }

        return React.DOM.div( {className:'ishop'}, 
            React.DOM.div( {className:'shopNameHeader'}, this.props.shopName ),
            React.DOM.div({className:'singleItem singleHeader'}, headers),
            React.DOM.div( {className:'items'}, itemsCode),
        );
    },
  });
