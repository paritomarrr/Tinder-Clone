import React from 'react'
import './SwipeButton.css'
import ReplayIcon from "@material-ui/icons/Replay"
import FavoriteIcon from "@material-ui/icons/Favorite"

import IconButton from "@material-ui/core/IconButton"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import StarRateIcon from "@material-ui/icons/StarRate"
import CloseIcon from "@material-ui/icons/Close"

function SwipeButton() {
    return (
        <div className="swipeButtons">
         <IconButton className="swipeButtonsrepeat btn-icon">
               <ReplayIcon fontSize="large" />
           </IconButton>
           <IconButton className="swipeButtonsleft btn-icon">
               <CloseIcon fontSize="large" />
           </IconButton>
           <IconButton className="swipeButtonsstar btn-icon">
               <StarRateIcon fontSize="large" />
           </IconButton>
           <IconButton className="swipeButtonsright btn-icon">
               <FavoriteIcon fontSize="large" />
           </IconButton>
           <IconButton className="swipeButtons__lightning btn-icon">
               <FlashOnIcon fontSize="large" />
           </IconButton>
        
        </div>
    )
}

export default SwipeButton
