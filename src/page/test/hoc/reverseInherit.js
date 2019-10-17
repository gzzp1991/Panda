import React from 'react';

@reverseInheritHoc({
  name: 'Billgates',
})
class Tob extends React.Component {
  render() {
    const { name } = this.props;
    console.log('name ', name);
    return (
      <div className="tob">
        {name}
      </div>
    )
  }
}

export default Tob;

function reverseInheritHoc({
  name = 'default',
}) {
  return function(Component) {
    return class HocComponent extends Component {
      render() {
        return super.render();
      };
    }
  }
}