import * as React from 'react';
import { Grid, Box, useMediaQuery } from '@mui/material';
import { DashBoardContainer, HorizontalLine } from './dashboard.styled';
import Trending from './components/Trending';
import RecentlyAdded from './components/RecentlyAdded';
import TopChannels from './components/TopChannels';
import LineChartSet from './components/LineChartSet/LineChartSet';
import OverViewSet from './components/OverViewSet/OverViewSet';
import GovernanceSet from './components/GovernanceSet/GovernanceSet';

const DashBoardView = () => {
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <DashBoardContainer maxWidth="xl" marginTop={isMobile ? '90px' : '135px'}>
      <Grid container spacing={!isMobile ? 4 : 0} justifyContent="center">
        <Trending />
        <HorizontalLine />
        <RecentlyAdded />
        <HorizontalLine />
        <TopChannels />
      </Grid>
      <LineChartSet />
      <OverViewSet />
      <GovernanceSet />
    </DashBoardContainer>
  );
};

export default DashBoardView;
