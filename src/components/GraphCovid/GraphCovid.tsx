import React from 'react';

import Chart from '@/components/GraphCovid/Chart';
import styles from '@/components/GraphCovid/GraphCovid.scss';

import ComponentLayout from '../layout';

const GraphCovid = (): JSX.Element => (
  <ComponentLayout>
    <div className={styles['graph-covid']}>GraphCovid</div>
  </ComponentLayout>

export default GraphCovid;
