import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Automate 85% of Data Reporting',
    description: (
      <>
        Kater is a data analysis workflow builder. Data teams use Kater to help their stakeholders make revenue-generating decisions by telling a story with their data.
      </>
    ), 
  },
  {
    title: 'Increase Data Literacy',
    description: (
      <>
        Define what questions to ask based on an objective. Automate weekly reports and bring software development best practices into data analysis.
      </>
    ),
  },
  {
    title: 'No More ADHOC Questions',
    description: (
      <>
        Kater is built to be personalizable, dynamic, and forgiving to non-technical users. Leverage AI to summarize and explain previously complex queries.
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
