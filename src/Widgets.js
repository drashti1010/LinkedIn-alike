import React from "react";
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newArticle=(heading, subtitle)=>(
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("Chandrayan reached on moon", 'Top news-3035 readers')}
      {newArticle("College football starts Today", 'Sports news-478 readers')}
      {newArticle("Bitcoins breaks record", 'Crypto news-769 readers')}
      {newArticle("Gun shoot at school in texas", 'Top news-1768 readers')}
      {newArticle("React is still top choice for webDEvlopers", 'Tech news-3035 readers')}
    </div>
  );
}

export default Widgets;
