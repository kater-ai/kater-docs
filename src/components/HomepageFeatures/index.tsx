import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Transparent Decisions',
    description: (
      <>
        Kater's Playbook Reports document decision logic, allowing executives to follow the reasoning behind insights without data team intervention.
      </>
    ), 
  },
  {
    title: 'Reimagined Jupyter Notebooks',
    description: (
      <>
        Build interactive decision trees, where each node is a live Jupyter notebook that dynamically executes based on real-time data.
      </>
    ),
  },
  {
    title: 'Continuously Refine',
    description: (
      <>
        Set and adjust thresholds in Playbooks to quickly test, refine, and measure the impact of business decisions in real time.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={{ paddingTop: '70px' }}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
