import React from 'react';
import { Card, CardContent, Typography, Box, Button, Avatar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';


type ChildProps = {
    onBuyNowClick: (state: number) => void; // `onButtonClick` accepts a string and returns void
  }

function AmazonLinkComponent({onBuyNowClick}: ChildProps) {
    return (
        <div></div>
    );
}