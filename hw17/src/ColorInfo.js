import React from 'react';

class ColorInfo extends React.Component {
  componentDidMount() {
    console.log('Mounted ColorInfo')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
    console.log('Update ColorInfo')
  }

  componentWillUnmount(){
    console.log('Unmounted component')
  }
  render() {
    const { color } = this.props;
    return (
      <div>
        Current color is:&nbsp;
        <strong style={{ color: color.hex }}>
          { color.name }
        </strong>
      </div>
    );
  }
}

export default ColorInfo;