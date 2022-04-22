import React from 'react';
import styled from '@emotion/styled';
import { IColorScale } from '@/Scales';
import { Space, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'antd/dist/antd.variable.min.css';

const AlphaLightBg =
  'linear-gradient(45deg,rgba(0, 0, 0, 0.05) 25%,transparent 0),linear-gradient(-45deg, rgba(0, 0, 0, 0.05) 25%, transparent 0),linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.05) 0),linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.05) 0)';

const AlphaDarkBg =
  'linear-gradient(45deg,rgba(255, 255, 255, 0.05) 25%,transparent 0),linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 0),linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.05) 0),linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.05) 0)';

const ScaleBox = styled.div`
  height: 32px;
  width: 48px;
  background-position: 0 0, 0 8px, 8px -8px, -8px 0;
  background-size: 16px 16px;
  position: relative;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;

const ScaleItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScaleRowTitle = styled.div`
  height: 32px;
  width: 64px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  opacity: 0.5;
`;

interface IScaleRowProps {
  title: 'light' | 'lightA' | 'dark' | 'darkA';
  scale: string[];
}

const ScaleRow: React.FC<IScaleRowProps> = ({ title, scale }) => {
  let style = {};
  switch (title) {
    case 'lightA':
      style = { backgroundColor: '#fff', backgroundImage: AlphaLightBg };
      break;
    case 'darkA':
      style = { backgroundColor: '#000', backgroundImage: AlphaDarkBg };
      break;
  }
  return (
    <Space size={2}>
      <ScaleRowTitle key="title">
        <Text>{title}</Text>
      </ScaleRowTitle>
      {scale.map((color, index) => {
        return (
          <CopyToClipboard key={index} text={color}>
            <ScaleBox style={style} onClick={() => message.success(color)}>
              <ScaleItem style={{ backgroundColor: color }} />
            </ScaleBox>
          </CopyToClipboard>
        );
      })}
    </Space>
  );
};

interface IScalePreviewProps {
  scale: IColorScale;
}

const ScalePreview: React.FC<IScalePreviewProps> = ({ scale }) => {
  return (
    <div>
      <Space direction="vertical" size={2}>
        <Space key="scale-title" size={2}>
          <ScaleRowTitle key="scale-num" />
          {new Array(12).fill('').map((_, index) => (
            <ScaleBox key={index}>
              <ScaleItem>
                <Text>{index}</Text>
              </ScaleItem>
            </ScaleBox>
          ))}
        </Space>
        <ScaleRow key="light" title="light" scale={scale.light} />
        <ScaleRow key="lightA" title="lightA" scale={scale.lightA} />
        <ScaleRow key="dark" title="dark" scale={scale.dark} />
        <ScaleRow key="darkA" title="darkA" scale={scale.darkA} />
      </Space>
    </div>
  );
};

export default ScalePreview;
