import React from 'react';
import { Search } from 'semantic-ui-react';

  
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = 
"https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
  
const SearchBar = () => (
 <div id='gfg'>
    <Search/>
 </div>
)
export default SearchBar;
