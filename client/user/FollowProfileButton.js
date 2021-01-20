import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const FollowProfileButton = (
  { onButtonClick,
    following
  }
) => {
  const followClick = () => {
    onButtonClick(follow);
  }

  const unfollowClick = () => {
    onButtonClick(unfollow);
  }

  return (
    <div>
      {
        following ?
          (<Button variant="contained" color="secondary"
            onClick={unfollowClick}
          >
            unfollow
          </Button>) : (
            <Button variant="contained" color="primary">
              Follow
            </Button>
          )
      }
    </div>
  )
}

FollowProfileButton.propTypes = {
  following: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
}

export default FollowProfileButton;