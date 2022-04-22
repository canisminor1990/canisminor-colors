import React, { useState } from 'react';
import styled from '@emotion/styled';
import { IColorScale } from '@/Scales';
import { Space } from 'antd';
import scaleAATest from './scaleAATest';
import 'antd/dist/antd.variable.min.css';

const ScaleTestRow = styled.div`
  height: 32px;
  width: 598px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
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

interface IScaleTestProps {
  scale: IColorScale;
  title?: string;
}

const ScaleTest: React.FC<IScaleTestProps> = ({ scale, title }) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const testResult = scaleAATest(scale);
  if (!showDetail)
    return (
      <div style={{ cursor: 'pointer' }} title="show details" onClick={() => setShowDetail(true)}>
        <Space size={2}>
          {title ? (
            <ScaleRowTitle>
              <Text>{title}</Text>
            </ScaleRowTitle>
          ) : null}

          <img src={testResult.all.shield} />
        </Space>
      </div>
    );
  return (
    <div>
      <Space size={2} direction="vertical">
        <Space size={2} title={'Contrast: ' + testResult.lowContrastTextLight.num}>
          <ScaleRowTitle>
            <img src={testResult.lowContrastTextLight.shield} />
          </ScaleRowTitle>
          <ScaleTestRow style={{ color: scale.light[10], background: scale.light[2] }}>
            Step10 on Step2 (light)
          </ScaleTestRow>
        </Space>
        <Space size={2} title={'Contrast: ' + testResult.lowContrastTextDark.num}>
          <ScaleRowTitle>
            <img src={testResult.lowContrastTextDark.shield} />
          </ScaleRowTitle>
          <ScaleTestRow style={{ color: scale.dark[10], background: scale.dark[2] }}>
            Step10 text on Step2 (dark)
          </ScaleTestRow>
        </Space>
        <Space size={2} title={'Contrast: ' + testResult.highContrastTextLight.num}>
          <ScaleRowTitle>
            <img src={testResult.highContrastTextLight.shield} />
          </ScaleRowTitle>
          <ScaleTestRow style={{ color: '#fff', background: scale.light[8], fontWeight: 600 }}>
            White text on Step8 (light)
          </ScaleTestRow>
        </Space>
        <Space size={2} title={'Contrast: ' + testResult.highContrastTextDark.num}>
          <ScaleRowTitle>
            <img src={testResult.highContrastTextDark.shield} />
          </ScaleRowTitle>
          <ScaleTestRow style={{ color: '#000', background: scale.dark[8], fontWeight: 600 }}>
            Black text on Step8 (dark)
          </ScaleTestRow>
        </Space>
      </Space>
    </div>
  );
};

export default ScaleTest;
