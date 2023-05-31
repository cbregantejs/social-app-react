import React from 'react';
import ItemStory from './ItemStory'

const  ListStories = ({stories}) => {
  return (
    <div className='list-stories'>
        {
          stories && stories
          .sort((a, b) => a.id > b.id ? 1 : -1)
          .map(story => (
            <ItemStory key={story.id} story={story}/>
          ))
        }
    </div>
  );
}
  
export default ListStories;
  