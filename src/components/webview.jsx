// WebView.js
import React from 'react';
import '../App.css';

const WebView = ({ source }) => {
  return (
    <iframe
      title="Web View"
      src={source}
      className="w-96 h-96 border"
    ></iframe>
  );
};

export default WebView;
