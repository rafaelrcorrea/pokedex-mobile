import styled from 'styled-components/native';
import { metrics } from '@config/metrics';

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.basePadding}px;
`;

export const StatsItemView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatsItemLabel = styled.Text`
  color: gray;
`;

export const StatsItemValue = styled.Text`
  font-weight: bold;
`;
export const StatsItemProgressValue = styled.Text`
  font-size: ${metrics.title2}px;
  margin-right: ${metrics.basePadding}px;
`;
