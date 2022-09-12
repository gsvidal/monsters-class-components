import React from 'react';
import './search-box.styles.css';

class SearchBox extends React.Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;

    return (
      <input
        type="search"
        className={`search-box ${className}`}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    );
  }
}

export default SearchBox;
